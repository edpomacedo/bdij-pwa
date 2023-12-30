// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ onClick, label }) => {
  return (
    <button className="botao" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

