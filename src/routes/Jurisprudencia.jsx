import React, { useState, useEffect, useCallback } from "react";
import './Jurisprudencia.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../components/Icons/SearchIcon";
import MicIcon from "../components/Icons/MicIcon";
import RecycleIcon from "../components/Icons/RecycleIcon";
import Ementas from "../components/Ementas/Ementas";
import CopyIcon from "../components/Icons/CopyIcon";

const Jurisprudencia = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");

  const highlightQuery = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    const highlightedText = text.replace(
      regex,
      (match, p1) => `<mark>${p1}</mark>`
    );
    return { __html: highlightedText };
  };

  const searchMediaWiki = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://web.bdij.com.br/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*`
      );

      if (response.data.error) {
        setNoResultsMessage("Erro temporário. Tente novamente mais tarde.");
        return;
      }

      const searchResults = response.data.query.search;

      if (searchResults.length === 0) {
        setNoResultsMessage("Nenhum resultado encontrado.");
      } else {
        setNoResultsMessage("");
      }

      const detailedResults = await Promise.all(
        searchResults.map(async (result) => {
          const detailedResponse = await axios.get(
            `https://api.bdij.com.br/rest?resource=${result.title}`
          );
          return {
            id: result.id,
            title: result.title,
            source: detailedResponse.data.source,
          };
        })
      );

      setResults(detailedResults);
      setNoResultsMessage(
        detailedResults.length === 0 ? "Nenhum resultado encontrado." : ""
      );
    } catch (error) {
      console.error("Error searching MediaWiki:", error);
      setNoResultsMessage("Erro inesperado. Tente novamente mais tarde.");
    }
  }, [query]);

  useEffect(() => {
    if (query.trim() !== "") {
      searchMediaWiki();
    }
  }, [searchMediaWiki, query]);

  useEffect(() => {
    // Atualiza o título da página com base na query
    document.title = `${query || "Jurisprudência"} :: BDIJ`;
  }, [query]);

  const handleSearch = () => {
    // Adiciona o parâmetro da busca à URL
    navigate(`?query=${encodeURIComponent(query)}`);
    // Chama a função para realizar a busca
    searchMediaWiki();
  };

  return (
    <div className="jurisprudencia_div">
      <main className="jurisprudencia_main">
        <div className="jurisprudencia_box">
          <div className="relative w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                // Adiciona o parâmetro da busca à URL enquanto o usuário digita
                navigate(`?query=${encodeURIComponent(e.target.value)}`);
              }}
              placeholder="Digite palavras-chave"
              className="jurisprudencia_input"
            />
            <SearchIcon className="jurisprudencia_search_icon" />
          </div>
          <button
            className="jurisprudencia_button"
            variant="primary"
            onClick={handleSearch}
            type="button"
          >
            <MicIcon className="w-4 h-4" />
          </button>
          <button
            className="jurisprudencia_button"
            variant="primary"
          >
            <RecycleIcon className="w-4 h-4" />
          </button>
        </div>
        <section className="jurisprudencia_results">
          {results.map((result) => (
            <Ementas
              key={result.id}
              dangerouslySetInnerHTML={highlightQuery(result.source, query)}
            >
              <CopyIcon className="w-4 h-4 mx-auto" />
            </Ementas>
          ))}
          {noResultsMessage && (
            <p
              className={`${
                noResultsMessage.includes("Erro")
                  ? "text-red-500 font-bold"
                  : ""
              }`}
            >
              {noResultsMessage}
            </p>
          )}
          {results.length > 0 && (
            <p>{results.length} resultados encontrados.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Jurisprudencia;
