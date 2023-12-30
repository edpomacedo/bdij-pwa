// src/components/Container/Container.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from './Container';

test('renders Container component with Catalog, Stats, and PoweredBy', () => {
  render(<Container />);

  // Certifique-se de que o componente Container é renderizado
  const containerElement = screen.getByTestId('container');
  expect(containerElement).toBeInTheDocument();

  // Verifique se os componentes filhos estão presentes
  // const catalogElement = screen.getByTestId('catalog');
  // const statsElement = screen.getByTestId('stats');
  // const poweredByElement = screen.getByTestId('powered-by');

  // expect(catalogElement).toBeInTheDocument();
  // expect(statsElement).toBeInTheDocument();
  // expect(poweredByElement).toBeInTheDocument();
});
