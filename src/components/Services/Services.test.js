// Services.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from './Services';
import features from '../../data/features';

// Mock data to use in the test
jest.mock('../../data/features', () => [
  {
    name: 'Mock Feature',
    description: 'Mock Description',
    link: 'https://mock-link.com',
  },
]);

describe('Services Component', () => {
  it('renders Services component with features', () => {
    render(<Services />);

    // Verify that each feature is present in the rendered component
    features.forEach((feature) => {
      const featureTerm = screen.getByText(feature.name);
      const featureDefinition = screen.getByText(feature.description);

      expect(featureTerm).toBeInTheDocument();
      expect(featureDefinition).toBeInTheDocument();
    });
  });

  // Add more tests as needed for specific functionality
});
