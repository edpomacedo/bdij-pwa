// mwTopics.jsx

import { useEffect, useState } from 'react';
import jsonp from 'jsonp';

const endpointURL = 'https://web.bdij.com.br/w/api.php?action=query&format=json&list=allpages&indexpageids=1&continue=&apnamespace=1&aplimit=500';

const MwTopics = () => {
  const [titulos, setTitulos] = useState([]);

  useEffect(() => {
    const extrairTitulos = (resultados) => {
      if (resultados && resultados.query && resultados.query.allpages) {
        return resultados.query.allpages.map((page) => removerPrefixoTalk(page.title));
      } else {
        console.error('Formato de resposta inesperado');
        return [];
      }
    };

    const fazerRequisicao = () => {
      jsonp(endpointURL, null, (err, data) => {
        if (err) {
          console.error('Erro na requisição:', err);
        } else {
          const titulosExtraidos = extrairTitulos(data);
          setTitulos(titulosExtraidos);
          console.log('Títulos obtidos:', titulosExtraidos);
        }
      });
    };

    fazerRequisicao();
  }, []);

  const removerPrefixoTalk = (titulo) => {
    // Remover o prefixo "Talk:" se estiver presente
    return titulo.replace(/^Talk:/, '');
  };

  return titulos;
};

export default MwTopics;
