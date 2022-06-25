import PropTypes from 'prop-types';

export const Profile= ({ user, stats})=>{
    const { avatar, username, tag, location} = user;
    const { followers, views, likes} = stats;

    return (
        <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt={avatar}
            width="150"
            className="avatar"
          />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
      
{stats && (<ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>)}
      </div>
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