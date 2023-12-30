// Legal.jsx
import React from "react";
import './Legal.css';
import contracts from "../../data/contracts";
import ScaleIcon from "../Icons/ScaleIcon";
import ShieldIcon from "../Icons/ShieldIcon";
import InfoIcon from "../Icons/InfoIcon";

function Legal() {
  return (
    <div className="legal_container">
      {contracts.map((contract) => (
        <a className="legal_link" key={contract.id} href={contract.link}>
          {getIconComponent(contract.icon, contract.name)}
        </a>
      ))}
    </div>
  );
}

// Função auxiliar para obter o componente de ícone com base no nome
function getIconComponent(iconName, altText) {
  switch (iconName) {
    case "ScaleIcon":
      return <ScaleIcon alt={altText} className="legal_icon" />;
    case "ShieldIcon":
      return <ShieldIcon alt={altText} className="legal_icon" />;
    case "InfoIcon":
      return <InfoIcon alt={altText} className="legal_icon" />;
    default:
      return null;
  }
}

export default Legal;
