import React from 'react';
import './Buttons.scss';

const Buttons = ({ good, neutral, bad }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={good}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={neutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={bad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default Buttons;
