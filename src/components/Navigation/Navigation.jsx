// Navigation.jsx
import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Principal</NavLink>
        </li>
        <li>
          <NavLink to="/informativos">Informativos</NavLink>
        </li>
        <li>
          <NavLink to="/jurisprudencia">Jurisprudência</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
