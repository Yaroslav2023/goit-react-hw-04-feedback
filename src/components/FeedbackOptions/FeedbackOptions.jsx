import cl from './feedbackOptions.module.css';
import { useContext } from 'react';
import { Context } from '../../context/stateContext';

const FeedbackOptions = () => {
  const { handleGood, handleNeutral, handleBad } = useContext(Context);

  return (
    <div className={cl.buttonsWrap}>
      <button className={cl.btn} type="button" onClick={handleGood}>
        Good
      </button>
      <button className={cl.btn} type="button" onClick={handleNeutral}>
        Neutral
      </button>
      <button className={cl.btn} type="button" onClick={handleBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
