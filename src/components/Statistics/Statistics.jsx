import React from 'react';
import './Statistics.scss';

const Statsistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Feedback</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{total()}</td>
        </tr>
        <tr>
          <td>Percentage</td>
          <td>{positivePercentage()} %</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statsistics;
