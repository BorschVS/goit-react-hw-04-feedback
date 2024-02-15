import { useReducer } from 'react';
import Statsistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
// import '../styles/base.scss';

function feedbackReducer(state, action) {
  switch (action.type) {
    case 'good':
      return {
        ...state,
        good: state.good + 1,
      };

    case 'neutral':
      return {
        ...state,
        neutral: state.neutral + 1,
      };

    case 'bad':
      return {
        ...state,
        bad: state.bad + 1,
      };
    default:
      throw new Error('Invalid action');
  }
}

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  function handleLeaveFeedback(option) {
    dispatch({ type: option });
  }

  function countTotalFeedback() {
    return state.good + state.neutral + state.bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((state.good / total) * 100) : 0;
  }

  const availableFeedback = countTotalFeedback() > 0 ? true : false;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {availableFeedback ? (
          <Statsistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
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
