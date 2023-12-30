// Navigation.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

test("renders Navigation component with links", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  // Verifica se o componente Navigation é renderizado corretamente
  const navigationElement = screen.getByRole("navigation");
  expect(navigationElement).toBeInTheDocument();

  // Verifica se os links estão presentes
  const principalLink = screen.getByRole("link", { name: /principal/i });
  expect(principalLink).toBeInTheDocument();

  const jurisprudenciaLink = screen.getByRole("link", { name: /jurisprudencia/i });
  expect(jurisprudenciaLink).toBeInTheDocument();

  const informativosLink = screen.getByRole("link", { name: /informativos/i });
  expect(informativosLink).toBeInTheDocument();
});
