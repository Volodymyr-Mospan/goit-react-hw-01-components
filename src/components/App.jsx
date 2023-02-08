import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../input_data/user.json';
import stats from '../input_data/data.json';
import friends from '../input_data/friends.json';
import transactionItems from '../input_data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactionItems} />
    </div>
  );
};
