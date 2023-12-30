// Facets.jsx
import React from "react";

const Facets = ({ topics, selectedTalk, onChange }) => {
  return (
    <div>
      {topics.map((facet) => (
        <div key={facet}>
          <input
            type="radio"
            id={facet}
            name="talk"
            value={facet}
            checked={selectedTalk === facet}
            onChange={onChange}
          />
          <label htmlFor={facet}>{facet}</label>
        </div>
      ))}
    </div>
  );
};

export default Facets;
