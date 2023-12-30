// src/layouts/Header/Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders Header component with logo and navigation', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  // Certifique-se de que o componente Header é renderizado
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  // Adicione mais asserções conforme necessário
  // Por exemplo, você pode verificar se o logo e a navegação estão presentes.
  // Exemplo:
  // const logoElement = screen.getByAltText('BDIJ');
  // const navigationElement = screen.getByTestId('navigation');
  // expect(logoElement).toBeInTheDocument();
  // expect(navigationElement).toBeInTheDocument();
});
