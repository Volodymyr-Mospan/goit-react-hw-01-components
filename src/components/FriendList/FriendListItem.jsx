import PropTypes from 'prop-types';
import { Status, FrendAva } from 'components/FriendList/';

// import css from 'components/FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <FrendAva src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
