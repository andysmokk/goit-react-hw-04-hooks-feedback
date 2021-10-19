import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ buttonNames, onLeaveFeedback }) {
  const buttons = Object.keys(buttonNames);
  return (
    <div>
      {buttons.map(button => (
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
  buttonNames: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
