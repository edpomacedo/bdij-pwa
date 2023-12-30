// Container.jsx
import React from "react";
import "./Container.css";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services"
import Stats from "../../components/Stats/Stats"
import Providers from "../../components/Providers/Providers";

function Container() {
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
