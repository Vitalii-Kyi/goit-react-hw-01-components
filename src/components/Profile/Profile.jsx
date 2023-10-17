import { ProfileStats } from "components/ProfileStats/ProfileStats";
import { Description, Avatar, Name, Tag, Place } from './Profile.styled';

export const Profile = ({userInfo}) => {
  console.log(userInfo.tag);
  return (
    <Description>
      <div>
        <Avatar src={userInfo.avatar} alt="user avatar" width="100" />
        <Name>{userInfo.username}</Name>
        <Tag>@{userInfo.tag}</Tag>
        <Place>{userInfo.location}</Place>
      </div>
      <ProfileStats userStats={userInfo.stats} />
    </Description>
  );
};
