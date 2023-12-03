import React from 'react';

const TopicRadioList = ({ topics, selectedTalk, onChange }) => {
  return (
    <div className="form-check">
        {topics.map((talk) => (
        <div key={talk} className="form-check">
          <input
            type="radio"
            id={talk}
            name="talk"
            value={talk}
            checked={selectedTalk === talk}
            onChange={onChange}
            className="form-check-input"
          />
          <label htmlFor={talk} className="form-check-label">
            {talk}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TopicRadioList;
