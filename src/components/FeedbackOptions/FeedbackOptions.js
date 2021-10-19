import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ buttonNames, onLeaveFeedback }) {
  return (
    <div>
      {buttonNames.map(button => (
        <button
          className={s.button}
          key={shortid.generate()}
          name={button}
          onClick={() => onLeaveFeedback(button)}
          type="button"
        >
          {button}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  buttonNames: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
