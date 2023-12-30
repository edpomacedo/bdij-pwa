// src/layouts/Header/Header.jsx
import React from "react";
import './Header.css';
import Banner from "../../components/Banner/Banner";
import Logo from "../../components/Logo/Logo"
import Navigation from "../../components/Navigation/Navigation";

function Header() {
  return (
    <div className="header" data-testid="header">
      <Banner />
      <main className="canvas">
        <header className="bloco">
          <Logo
            alt="BDIJ"
            className="logo"
            height="168"
            width="300"
          />
          <Navigation />
        </header>
      </main>
    </div>
  );
}

export default Header;
