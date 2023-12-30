// Container.jsx
import React, { useEffect } from "react";
import "./Container.css";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services"
import Stats from "../../components/Stats/Stats"
import Providers from "../../components/Providers/Providers";

function Container() {
  useEffect(() => {
    document.title = "Base de Dados de Institutos Jurídicos";
    // Adicione mais lógica aqui, se necessário
  }, []); // O array vazio assegura que o efeito só é executado uma vez durante a montagem do componente
  
  return (
    <div className="fundo" data-testid="container">
      <div className="espacamento">
        <Hero />
        <Services />
      </div>
      <Stats />
      <Providers />
    </div>
  );
}

export default Container;
