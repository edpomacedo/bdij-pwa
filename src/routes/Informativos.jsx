// Informativos.jsx
import React, { useState, useEffect } from "react";
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

  const handleTalkChange = (newSelectedTalk) => {
    setSelectedTalk(newSelectedTalk);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <main className="container mx-auto py-6 px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
        <section className="col-span-full py-6 sm:col-span-1 lg:col-span-3">
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
