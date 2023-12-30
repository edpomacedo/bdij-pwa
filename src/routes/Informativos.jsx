import React, { useState, useEffect } from "react";
import './Informativos.css';
import axios from "axios";
import Topics from "../components/Topics/Topics";
import Card from "../components/Card/Card";
import CopyIcon from "../components/Icons/CopyIcon";

const Informativos = () => {
  const [selectedTalk, setSelectedTalk] = useState("Contestação");
  const [topicResults, setTopicResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get("https://api.bdij.com.br/rest", {
          params: {
            resource: `Talk:${encodeURIComponent(selectedTalk)}`,
          },
        });

        const { data } = response;

        if (!data || !data.source) {
          console.error("Erro ao buscar resultados: Resposta inválida");
          return;
        }

        const content = data.source;
        const topics = content.split(/\s*==\s*(.+?)\s*==\s*/).filter(Boolean);

        if (topics.length >= 2) {
          const formattedTopics = [];
          for (let i = 0; i < topics.length; i += 2) {
            const title = topics[i].trim();
            const content = topics[i + 1].trim();
            formattedTopics.push({ title, content });
          }

          setTopicResults(formattedTopics);
        } else {
          console.error("Erro ao processar os tópicos: Estrutura inválida");
        }
      } catch (error) {
        console.error("Erro ao buscar resultados:", error);
      }
    };

    fetchSearchResults();
  }, [selectedTalk]); // Executa sempre que selectedTalk for alterado

  // Atualiza o título da página com base no tópico selecionado
  useEffect(() => {
    document.title = `${selectedTalk || "Selecionar Tópico"} @ Informativos :: BDIJ`;
  }, [selectedTalk]);

  const handleTalkChange = (newSelectedTalk) => {
    setSelectedTalk(newSelectedTalk);
  };

  return (
    <div className="informativos_div">
      <main className="informativos_main">
        <section className="informativos_section">
          {topicResults.map(({ title, content }, index) => (
            <Card key={index} title={title} content={content}>
              <CopyIcon className="w-4 h-4 mx-auto" />
            </Card>
          ))}
        </section>
        <div className="py-6">
          <Topics onRadioChange={handleTalkChange} />
        </div>
      </main>
    </div>
  );
};

export default Informativos;
