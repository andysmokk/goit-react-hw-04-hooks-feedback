import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonNames = Object.keys(options);
  return (
    <div>
      {buttonNames.map(button => (
        <button
          className={s.button}
          key={shortid.generate()}
          name={button}
          onClick={onLeaveFeedback}
          type="button"
        >
          {button}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
