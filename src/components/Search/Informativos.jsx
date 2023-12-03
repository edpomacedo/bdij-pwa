import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopicRadioList from './TopicRadioList'; // Certifique-se de fornecer o caminho correto

const Informativos = () => {
    const [selectedTalk, setSelectedTalk] = useState('Contestação');
    const [topicResults, setTopicResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get('https://proxy.bdij.com.br/proxy', {
                    params: {
                        resource: `Talk:${encodeURIComponent(selectedTalk)}`,
                    },
                });

                const { data } = response;

                if (!data || !data.source) {
                    console.error('Erro ao buscar resultados: Resposta inválida');
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
                    console.error('Erro ao processar os tópicos: Estrutura inválida');
                }
            } catch (error) {
                console.error('Erro ao buscar resultados:', error);
            }
        };

        fetchSearchResults();
    }, [selectedTalk]); // Executa sempre que selectedTalk for alterado

    const handleTalkChange = (event) => {
        setSelectedTalk(event.target.value);
    };

    const topicsList = [
        'Agravo interno',
        'Ação civil pública',
        'Ação de exigir contas',
        'Banco Nacional dos Devedores Trabalhistas',
        'Cessão de crédito',
        'Competência',
        'Contestação',
        'Cumprimento de sentença arbitral',
        'Decisão interlocutória',
        'Honorários advocatícios',
        'Negócio jurídico processual',
        'Penhora de cotas de fundo de investimento',
        'Recuperação judicial',
        'Salário-maternidade',
        'Sociedade seguradora de capitalização',
        'Suspensão condicional da pena',
        'Sócio oculto'
    ];

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="row">
                <div class="col-md-9 col-12">
                    {topicResults.map(({ title, content }, index) => (
                        <div className="card mb-4" key={index}>
                            <div className="card-header">{title}</div>
                            <div className="card-body">
                                <p className="card-text">{content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-3 mb-4">
                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span className="sidebar-heading d-flex justify-content-between align-items-center text-body-secondary text-uppercase fw-bold">Escolha um tópico</span>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <TopicRadioList
                                        topics={topicsList}
                                        selectedTalk={selectedTalk}
                                        onChange={handleTalkChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Informativos;
