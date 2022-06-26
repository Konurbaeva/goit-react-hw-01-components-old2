import PropTypes from 'prop-types';
import { ProfileItem } from './ProfileItem';
import { Stats } from './Stats';


export const Profile= ({ user, stats})=>{
  const { avatar, username, tag, location} = user;

  return (
<>
<ProfileItem
avatar={avatar} 
username={username} 
tag={tag} 
location={location}
/>
<Stats stats={stats}/>
</>   
 )
}


Profile.propTypes = {
user: PropTypes.shape({
    avatar: PropTypes.string, 
    username: PropTypes.string,
    tag: PropTypes.string, 
    location: PropTypes.string,
}),
stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
})
}