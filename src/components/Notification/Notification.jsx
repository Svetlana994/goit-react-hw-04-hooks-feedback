import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <div className={s.text}>{message}</div>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;