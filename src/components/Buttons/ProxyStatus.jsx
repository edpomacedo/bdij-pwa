import React, { useState, useEffect } from 'react';
import HandThumbsUpIcon from '../Icons/HandThumbsUpIcon';
import HandThumbsDownIcon from '../Icons/HandThumbsDownIcon';

const ProxyStatus = () => {
  const [isActive, setIsActive] = useState(true); // Assumindo que o serviço está inicialmente ativo

  useEffect(() => {
    const checkServiceStatus = async () => {
      try {
        const response = await fetch('https://proxy.bdij.com.br/');
        if (response.ok) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      } catch (error) {
        setIsActive(false);
      }
    };

    // Verificar inicialmente e, em seguida, configurar um intervalo para verificação periódica
    checkServiceStatus();

    const intervalId = setInterval(() => {
      checkServiceStatus();
    }, 5000); // Intervalo de 5 segundos (ajuste conforme necessário)

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {isActive ? (
        <HandThumbsDownIcon />
      ) : (
        <HandThumbsUpIcon />
      )}
    </div>
  );
};

export default ProxyStatus;
