import React, { useState, useEffect, useCallback } from "react";
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

  const handleSearch = () => {
    // Adiciona o parâmetro da busca à URL
    navigate(`?query=${encodeURIComponent(query)}`);
    // Chama a função para realizar a busca
    searchMediaWiki();
  };

  return (
    <div className="bg-[#F5F5F5]">
      <main className="container mx-auto py-6 px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
        <div className="flex items-center justify-center py-6 col-span-full sm:order-first lg:order-none">
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
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
            />
            <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
          <button
            className="rounded ml-4 border py-2 pl-2 pr-2 border-gray-300 hover:bg-gray-200 bg-white"
            variant="primary"
            onClick={handleSearch}
            type="button"
          >
            <MicIcon className="w-4 h-4" />
          </button>
          <button
            className="rounded ml-4 border py-2 pl-2 pr-2 border-gray-300 hover:bg-gray-200 bg-white"
            variant="primary"
          >
            <RecycleIcon className="w-4 h-4" />
          </button>
        </div>
        <section className="col-span-full sm:col-span-1 lg:col-span-3">
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
