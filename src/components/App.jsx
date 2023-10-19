import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import { GlobalStyle } from './GlobalStyle';



export const App = () => {
  return (
    <div>
      <Profile userInfo={user} />
      <Statistics title="Upload stats" stats={data}/>

      <GlobalStyle/>
    </div>
  );
};
