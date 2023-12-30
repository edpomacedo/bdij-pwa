// Hero.tsx
import React from "react";
import "./Hero.css";

function Navigation() {
  return (
    <div className="palco" data-testid="hero">
      <h2 className="titulo">BASE DE DADOS DE INSTITUTOS JURÍDICOS</h2>
      <p className="subtitulo">
        Banco de dados secundário gratuito e multilíngue, voltado para a coleta
        e estruturação de dados a fim de fornecer suporte para os operadores do
        Direito.
      </p>
    </div>
  );
}

export default Navigation;
