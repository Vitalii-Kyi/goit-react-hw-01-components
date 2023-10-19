import { Item, Status, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline} }) => {
  return (
    <Item>
      <Status $status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};