// Importa o useNavigate de 'react-router-dom'
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MwTopics from "../../utils/schemas/mwTopics";

const Topics = ({ onRadioChange }) => {
  // Utiliza o useNavigate
  const navigate = useNavigate();

  const allTitulosObtidos = MwTopics();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleResults, setVisibleResults] = useState(10);

  // Filtrar títulos com base no termo de busca
  const filteredTitulos = allTitulosObtidos.filter(titulo =>
    titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Exibir até 10 resultados
  const titulosObtidos = filteredTitulos.slice(0, visibleResults);

  const handleRadioChange = (titulo) => {
    // Adiciona o parâmetro do título selecionado à URL
    navigate(`?visibleResults=${visibleResults}&selectedTitulo=${encodeURIComponent(titulo)}`);

    // Chama a função externa para lidar com a mudança de rádio
    onRadioChange(titulo);
  };

  const handleShowMore = (e) => {
    e.preventDefault();

    setVisibleResults((prevVisibleResults) => prevVisibleResults + 10);

    // Utiliza navigate para adicionar o parâmetro à URL
    navigate(`?visibleResults=${visibleResults + 10}`);
  };

  return (
    <form className="space-y-2">
      <fieldset className="mb-4">
        <legend className="block text-sm text-gray-700 font-bold">
          Selecione um tópico:
        </legend>

        {/* Campo de input para o termo de busca */}
        <input
          type="text"
          placeholder="Filtrar tópicos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full rounded-md border-0 py-2 pl-2 pr-2 mb-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
        />

        {/* Renderizar os títulos filtrados */}
        {titulosObtidos.map((titulo) => (
          <div
            key={titulo}
            className="py-1 hover:bg-gray-200 cursor-pointer rounded pl-3"
          >
            <input
              type="radio"
              id={titulo}
              name="topics"
              onChange={() => handleRadioChange(titulo)}
              className="mr-1"
            />
            <label className="text-gray-900 pl-2" htmlFor={titulo}>
              {titulo}
            </label>
          </div>
        ))}
      </fieldset>

      {/* Botão "Show More" */}
      {visibleResults < filteredTitulos.length && (
        <button
          onClick={handleShowMore}
          className="rounded border py-2 pl-2 pr-2 border-gray-300 hover:bg-gray-200 bg-white"
        >
          Exibir mais
        </button>
      )}
    </form>
  );
};

export default Topics;
