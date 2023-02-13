import PropTypes from 'prop-types';
import {
  FriendListItem,
  ListOfFriends,
  ItemListOfFriends,
} from 'components/FriendList/';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <ItemListOfFriends key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </ItemListOfFriends>
      ))}
    </ListOfFriends>
  );
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
