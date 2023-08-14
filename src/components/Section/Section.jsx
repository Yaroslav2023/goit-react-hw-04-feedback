import { useState, useContext } from 'react';
import cl from './section.module.css';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import { Context } from 'context/stateContext';

const Section = () => {
  const [title] = useState('Please leave feedback');
  const { totalFeedback } = useContext(Context);

  return (
    <section className={cl.section}>
      <h2 className={cl.title}>{title}</h2>
      <FeedbackOptions />
      {totalFeedback > 0 ? (
        <Statistics></Statistics>
      ) : (
        <Notification message="There is no feedback yet." />
      )}
    </section>
  );
};

export default Section;
