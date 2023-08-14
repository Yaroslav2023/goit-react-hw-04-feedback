import { createContext, useState } from 'react';

export const Context = createContext();

export function GlobalContext({ children }) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(state => state + 1);
  };

  const handleNeutral = () => {
    setNeutral(state => state + 1);
  };

  const handleBad = () => {
    setBad(state => state + 1);
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <Context.Provider
      value={{
        good,
        setGood,
        neutral,
        setNeutral,
        bad,
        setBad,
        handleGood,
        handleNeutral,
        handleBad,
        totalFeedback,
        positiveFeedbackPercentage,
      }}
    >
      {children}
    </Context.Provider>
  );
}
