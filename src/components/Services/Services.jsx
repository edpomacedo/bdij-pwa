// Services.jsx
import React from "react";
import './Services.css';
import features from "../../data/features";

function Navigation() {
  return (
    <dl className="lista">
      {features.map((feature) => (
        <div key={feature.name} className="divisor">
          <dt className="termo">
            <a href={feature.link} target="_blank" rel="noopener noreferrer">
              {feature.name}
            </a>
          </dt>
          <dd className="definicao">{feature.description}</dd>
        </div>
      ))}
    </dl>
  );
}

export default Navigation;
