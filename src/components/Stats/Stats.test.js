// Stats.test.js
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Stats from './Stats';
import { fetchMediaWikiStats } from '../../utils/mwApi';

jest.mock('../../utils/mwApi', () => ({
  fetchMediaWikiStats: jest.fn(),
}));

describe('Stats component', () => {
  it('renders statistics correctly', async () => {
    // Mock assíncrono para fetchMediaWikiStats
    const mockStats = { pages: 10, edits: 20, 'cirrussearch-article-words': 30 };
    fetchMediaWikiStats.mockImplementationOnce((callback) => {
      setTimeout(() => {
        callback(null, mockStats);
      }, 0);
    });

    // Renderizar o componente
    render(<Stats />);

    // Esperar pela resolução da chamada assíncrona
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Verificar se as estatísticas são exibidas corretamente
    expect(screen.getByText('Entidades mapeadas')).toBeInTheDocument();
    expect(screen.getByText('Registros efetuados')).toBeInTheDocument();
    expect(screen.getByText('Palavras indexadas')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });
});
