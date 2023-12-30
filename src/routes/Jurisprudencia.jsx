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
  const recognition = new window.webkitSpeechRecognition(); // Cria uma instância do reconhecimento de voz

  // Função para destacar a palavra-chave na resposta da pesquisa
  const highlightQuery = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    const highlightedText = text.replace(
      regex,
      (match, p1) => `<mark>${p1}</mark>`
    );
    return { __html: highlightedText };
  };

  // Função para realizar a pesquisa na API
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

  // Efeito para acionar a pesquisa quando a query é modificada
  useEffect(() => {
    if (query.trim() !== "") {
      searchMediaWiki();
    }
  }, [searchMediaWiki, query]);

  // Efeito para configurar o reconhecimento de voz
  useEffect(() => {
    // Adiciona um ouvinte para o evento de resultado do reconhecimento de voz
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      searchMediaWiki();
    };

    // Adiciona um ouvinte para o evento de erro do reconhecimento de voz
    recognition.onerror = (event) => {
      console.error("Error during speech recognition:", event.error);
    };

    // Atualiza o título da página com base na query
    document.title = `${query || "Jurisprudência"} :: BDIJ`;
  }, [query]);

  // Função para acionar a pesquisa
  const handleSearch = () => {
    // Adiciona o parâmetro da busca à URL
    navigate(`?query=${encodeURIComponent(query)}`);
    // Chama a função para realizar a busca
    searchMediaWiki();
  };

  // Função para copiar o conteúdo para a área de transferência
  const handleCopyClick = (content) => {
    // Cria um elemento temporário para armazenar o texto
    const tempInput = document.createElement("textarea");
    tempInput.value = content;
    document.body.appendChild(tempInput);
    tempInput.select();
  
    // Copia o texto para a área de transferência
    document.execCommand("copy");
  
    // Remove o elemento temporário
    document.body.removeChild(tempInput);
  
    // Exibe uma notificação
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Texto copiado para a área de transferência!");
    } else if ("Notification" in window && Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Texto copiado para a área de transferência!");
        }
      });
    } else {
      // Se as notificações não são suportadas ou estão bloqueadas
      alert("Texto copiado para a área de transferência!");
    }
  };

  // Função para iniciar o reconhecimento de voz
  const handleMicClick = () => {
    recognition.start();
  };

  return (
    <div className="jurisprudencia_div">
      <main className="jurisprudencia_main">
        <div className="jurisprudencia_box">
          <div className="relative w-full">
            {/* Campo de pesquisa por palavra-chave */}
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                navigate(`?query=${encodeURIComponent(e.target.value)}`);
              }}
              placeholder="Digite palavras-chave"
              className="jurisprudencia_input"
            />
            <SearchIcon className="jurisprudencia_search_icon" />
          </div>
          {/* Botão de pesquisa por comando de voz */}
          <button
            className="jurisprudencia_button"
            variant="primary"
            onClick={handleSearch}
            type="button"
          >
            <MicIcon className="w-4 h-4" onClick={handleMicClick} />
          </button>
          {/* Botão para limpar a pesquisa */}
          <button
            className="jurisprudencia_button"
            variant="primary"
            type="button"
          >
            <RecycleIcon className="w-4 h-4" />
          </button>
        </div>
        {/* Exibição dos resultados da pesquisa */}
        <section className="jurisprudencia_results">
          {results.map((result) => (
            <Ementas
              key={result.id}
              dangerouslySetInnerHTML={highlightQuery(result.source, query)}
            >
              <CopyIcon
                className="w-4 h-4 mx-auto"
                onClick={() => handleCopyClick(result.source)}
              />
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
