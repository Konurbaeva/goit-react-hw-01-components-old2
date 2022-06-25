import { Profile } from './Profile'
import user from '../user.json'
import data from '../data.json';
import { Statistics } from './Statistics';


export const App = () => {
  return (
    <div>
    <Profile
  user={user}
  stats={user.stats}
/>
<Statistics stats={data}/>
    </div>
  );
};
