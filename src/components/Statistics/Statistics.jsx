import { useContext } from 'react';
import { Context } from 'context/stateContext';

const Statistics = () => {
  const { good, neutral, bad, totalFeedback, positiveFeedbackPercentage } =
    useContext(Context);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage} %</p>
    </div>
  );
};

export default Statistics;
