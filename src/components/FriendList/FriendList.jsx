import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends, children }) => {
  return <ul className={css['friend-list']}>{children}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
