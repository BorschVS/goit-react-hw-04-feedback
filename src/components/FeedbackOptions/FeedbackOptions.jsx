import React from 'react';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        {options.map(option => (
          <button
            key={option}
            className={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </li>
    </ul>
  );
};

export default FeedbackOptions;
