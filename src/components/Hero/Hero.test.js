// Hero.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("renders Hero component with title and subtitle", () => {
  render(<Hero />);

  // Verifica se o componente Hero é renderizado corretamente
  const heroElement = screen.getByTestId("hero");
  expect(heroElement).toBeInTheDocument();

  // Verifica se o título está presente
  const titleElement = screen.getByText(/base de dados de institutos jurídicos/i);
  expect(titleElement).toBeInTheDocument();

  // Verifica se o subtítulo está presente
  const subtitleElement = screen.getByText(/banco de dados secundário gratuito e multilíngue/i);
  expect(subtitleElement).toBeInTheDocument();
});
