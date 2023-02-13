import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  ProfileCard,
  ProfileAva,
  ProfileName,
  ProfileTag,
  ProfileStatsList,
  ProfileStatsItem,
  ProfileStatsLable,
} from './Profile.styled';

// import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <div>
        <ProfileAva src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <p>{location}</p>
      </div>
      <ProfileStatsList>
        {Object.entries(stats).map(stat => (
          <ProfileStatsItem key={nanoid()}>
            <ProfileStatsLable>{stat[0]}</ProfileStatsLable>
            <span>{stat[1]}</span>
          </ProfileStatsItem>
        ))}
      </ProfileStatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
