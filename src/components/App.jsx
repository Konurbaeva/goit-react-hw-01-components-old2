import { Profile } from './Profile'
import user from '../user.json'


export const App = () => {
  return (
    <div>
    <Profile
  user={user}
  stats={user.stats}
/>
    </div>
  );
};
