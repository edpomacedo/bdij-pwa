import React, { useState, useEffect } from "react";
import jsonp from "jsonp";

const ElasticSearch = () => {
  const [apiStatus, setApiStatus] = useState("Operacional");

  useEffect(() => {
    const apiUrl =
      "https://web.bdij.com.br/w/api.php?action=query&format=json&list=search&srsearch=contrato&origin=*";

    jsonp(apiUrl, null, (error, data) => {
      if (error) {
        console.error("Error checking API status:", error);
        setApiStatus("Erro na API");
      } else {
        // Verificar se a resposta da API contém um erro
        if (data.error) {
          setApiStatus("Erro na API");
        } else {
          setApiStatus("Operacional");
        }
      }
    });
  }, []);

  return (
    <div>
      <p>Status da API: {apiStatus}</p>
      {apiStatus === "Erro na API" && (
        <p>
          Ocorreu um erro ao acessar a API. Por favor, tente novamente mais tarde.
        </p>
      )}
    </div>
  );
};

export default ElasticSearch;
