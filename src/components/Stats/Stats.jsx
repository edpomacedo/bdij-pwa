// Stats.jsx
import React, { useState, useEffect } from "react";
import "./Stats.css";
import { fetchMediaWikiStats } from "../../utils/mwApi"; 
import mwStats from "../../utils/schemas/mwStats"; 

const Stats = () => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMediaWikiStats((error, response) => {
      if (error) {
        console.error(error);
      } else {
        setStatistics(response);
      }
      setLoading(false);
    });

    // Cleanup da função de retorno para evitar vazamento de memória
    return () => {
      window.handleResponse = null;
    };
  }, []);

  return (
    <div className="stats_fundo">
      <div className="stats_espacamento">
        <dl className="stats_malha">
          {mwStats(statistics).map((stat) => (
            <div key={stat.id} className="stats_coluna">
              <dt className="stats_numero">{stat.name}</dt>
              <dd className={`stats_ativo ${loading ? "stats_esqueleto" : ""}`}>
                {loading ? "" : stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
