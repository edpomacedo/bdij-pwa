import React, { useState, useEffect } from "react";
import "./Card.css";
import PropTypes from "prop-types";
import PlayIcon from "../Icons/PlayIcon";
import PauseIcon from "../Icons/PauseIcon";

function Card({ title, content, dangerouslySetInnerHTML, children }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    let speechUtterance;

    const handleEnd = () => {
      setIsSpeaking(false);
      speechUtterance.removeEventListener("end", handleEnd);
    };

    if (isSpeaking) {
      speechUtterance = new SpeechSynthesisUtterance(content);
      speechUtterance.addEventListener("end", handleEnd);
      setSpeech(speechUtterance);
      window.speechSynthesis.speak(speechUtterance);
    }

    return () => {
      if (speechUtterance) {
        window.speechSynthesis.cancel(); // Cancela a leitura atual
        setSpeech(null);
      }
    };
  }, [isSpeaking, content]);

  const handleSpeechToggle = () => {
    setIsSpeaking((prevIsSpeaking) => !prevIsSpeaking);
  };

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
      <div className="card_footer">
        <button onClick={handleSpeechToggle}>
          {isSpeaking ? <PauseIcon className="w-5 h-5 mr-5 mx-auto" /> : <PlayIcon className="w-5 h-5 mr-5 mx-auto" />}
        </button>
        <small>Sintetizar o texto em áudio</small>
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
