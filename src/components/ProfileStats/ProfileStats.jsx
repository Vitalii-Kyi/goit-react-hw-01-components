import { List, ListStat, Quantity, Text } from './ProfileStats.styled';

export const ProfileStats = ({ userStats: { followers, views, likes } }) => {
  return (
    <List>
      <ListStat>
        <Text>Followers</Text>
        <Quantity>{followers}</Quantity>
      </ListStat>
      <ListStat>
        <Text>Views</Text>
        <Quantity>{views}</Quantity>
      </ListStat>
      <ListStat>
        <Text>Likes</Text>
        <Quantity>{likes}</Quantity>
      </ListStat>
    </List>
  );
};