// Card.jsx
import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ title, content, dangerouslySetInnerHTML, children }) {
  return (
    <div className="card">
      <div className="card_header">
        <div className="card_title">{title}</div>
      </div>
      <div
        className="card_content"
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      >
        <span>{content}</span>
      </div>
      <div className="card_footer">{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.object,
  children: PropTypes.node,
};

export default Card;
