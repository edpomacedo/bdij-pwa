// ServiceStatus.jsx
import React, { useState, useEffect } from "react";
import SignalIcon from "../Icons/SignalIcon";
import "./ServiceStatus.css";

const ServiceStatus = ({ serviceName, url }) => {
  const [status, setStatus] = useState("Aguardando");
  const [iconColor, setIconColor] = useState("text-gray-500");

  useEffect(() => {
    const checkServiceStatus = async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          setStatus("Operacional");
        } else {
          setStatus("Indisponível");
        }
      } catch (error) {
        setStatus("Erro ao verificar o status");
      }
    };

    checkServiceStatus();
  }, [url]);

  useEffect(() => {
    if (status === "Operacional") {
      setIconColor("text-green-500");
    } else if (status === "Indisponível") {
      setIconColor("text-yellow-500");
    } else {
      setIconColor("text-red-500");
    }
  }, [status]);

  return (
    <div className="service-status-button">
      <SignalIcon className={`service-status-icon ${iconColor}`} />
      <span>
        <strong>{serviceName}:</strong> <em>{status}</em>
      </span>
    </div>
  );
};

export default ServiceStatus;
