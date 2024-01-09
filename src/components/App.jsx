import React, { Component } from 'react';
import FeedBack from './Feedback';
import '../styles/base.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calculateGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  calculateNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  calculateBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <FeedBack
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        calculateGood={this.calculateGood}
        calculateNeutral={this.calculateNeutral}
        calculateBad={this.calculateBad}
      />
    );
  }
}

export default App;
