import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={s.text}>
        Good: <span className={s.span}>{good}</span>
      </p>
      <p className={s.text}>
        Neutral: <span className={s.span}>{neutral}</span>
      </p>
      <p className={s.text}>
        Bad: <span className={s.span}>{bad}</span>
      </p>
      <p className={s.text}>
        Total: <span className={s.span}>{total}</span>
      </p>
      <p className={s.text}>
        Positive feedback: <span className={s.span}>{positivePercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
