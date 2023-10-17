import { Profile } from './Profile/Profile';

import { GlobalStyle } from './GlobalStyle';


import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile userInfo={user} />

      <GlobalStyle/>
    </div>
  );
};
