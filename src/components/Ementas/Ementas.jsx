// Ementas.jsx
import React from "react";
import "./Ementas.css";
import PropTypes from "prop-types";

function Ementas({ title, dangerouslySetInnerHTML, children }) {
  return (
    <div className="card">
      <div className="card_header">
        <div className="card_title">{title}</div>
      </div>
      <div
        className="card_content"
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      >
      </div>
      <div className="card_footer">{children}</div>
    </div>
  );
}

Ementas.propTypes = {
  title: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.object,
  children: PropTypes.node,
};

export default Ementas;
