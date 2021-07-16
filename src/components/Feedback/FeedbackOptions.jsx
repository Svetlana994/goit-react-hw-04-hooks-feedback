import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      className={s.btn}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
