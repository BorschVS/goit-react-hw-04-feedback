import React, { Component } from 'react';
import Statsistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import '../styles/base.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = () => {
      return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
      const total = countTotalFeedback();
      return total > 0 ? Math.round((good / total) * 100) : 0;
    };

    const availableFeedback = countTotalFeedback() > 0 ? true : false;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {availableFeedback ? (
            <Statsistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
