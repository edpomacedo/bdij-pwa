// Ementas.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SearchNavigation from './SearchNavigation';
import FunnelIcon from '../Icons/FunnelIcon';
import ProxyStatus from '../Buttons/ProxyStatus';

const Ementas = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [noResultsMessage, setNoResultsMessage] = useState('');
    const [resultCount, setResultCount] = useState(0);

    const searchMediaWiki = useCallback(async () => {
        try {
            const response = await axios.get(`https://web.bdij.com.br/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*`);
            const searchResults = response.data.query.search;

            // Para cada resultado, fazer uma chamada individual para obter mais informações
            const detailedResults = await Promise.all(searchResults.map(async result => {
                const detailedResponse = await axios.get(`https://proxy.bdij.com.br/proxy?resource=${result.title}`);
                return {
                    id: result.id,
                    title: result.title,
                    source: detailedResponse.data.source,
                };
            }));

            setResults(detailedResults);
            setResultCount(detailedResults.length);
            setNoResultsMessage(resultCount === 0 ? 'Nenhum resultado encontrado.' : '');
        } catch (error) {
            console.error('Error searching MediaWiki:', error);
        }
    }, [query, resultCount]);

    useEffect(() => {
        searchMediaWiki();
    }, [searchMediaWiki, query]);

    const highlightQuery = (text, query) => {
        // Função para destacar a palavra de busca
        const regex = new RegExp(`(${query})`, 'gi');
        const highlightedText = text.replace(regex, (match, p1) => `<mark>${p1}</mark>`);
        return { __html: highlightedText };
    };

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <SearchNavigation />
            <div className="input-group mb-3">
                <span className="input-group-text">
                    <FunnelIcon />
                </span>
                <span className="input-group-text">
                    <ProxyStatus />
                </span>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="form-control" placeholder="Digite palavras-chave"
                    aria-label="Search" aria-describedby="basic-addon1" />
                <button onClick={searchMediaWiki} className="btn btn-outline-secondary" type="button">Filtrar</button>
            </div>
            <p>{resultCount} resultados encontrados.</p>
            {results.map(result => (
                <div className="card mb-4" key={result.id}>
                    <div className="card-body">
                        <span dangerouslySetInnerHTML={highlightQuery(result.source, query)} />
                    </div>
                </div>
            ))}
            <p className="d-none">{noResultsMessage}</p>
        </main>
    );
};

export default Ementas;
