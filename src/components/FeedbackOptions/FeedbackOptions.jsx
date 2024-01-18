import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        {options.map(option => (
          <button
            key={option}
            className={`${css.button} ${css[option]}`}
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
