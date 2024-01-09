import React from 'react';
import Statsistics from 'components/Statistics';
import Buttons from 'components/Buttons';
import './Feedback.scss';

const FeedBack = ({
  good,
  neutral,
  bad,
  calculateGood,
  calculateNeutral,
  calculateBad,
}) => {
  return (
    <>
      <h1 className="title">Please leave feedback</h1>
      <Buttons
        good={calculateGood}
        neutral={calculateNeutral}
        bad={calculateBad}
      />
      <Statsistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default FeedBack;
