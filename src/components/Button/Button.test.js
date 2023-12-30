// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button label="Clique em mim" />);
    const buttonElement = getByText(/Clique em mim/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock} label="Clique em mim" />);
    const buttonElement = getByText(/Clique em mim/i);
    
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
