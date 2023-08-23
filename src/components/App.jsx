import { Profile } from './Profile';
import user from './Profile/user.json';
// import { Statistics } from './Statistics';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics /> */}
    </>
  );
};
