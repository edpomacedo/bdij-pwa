// Logo.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Logo data-testid="logo" />);
    const logoElement = getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });

  // Adicione mais testes conforme necessário
});
