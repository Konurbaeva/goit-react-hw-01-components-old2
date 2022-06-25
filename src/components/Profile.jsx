import PropTypes from 'prop-types';

export const Profile= ({ user, stats})=>{
    const { avatar, username, tag, location} = user;
    const { followers, views, likes} = stats;

    console.log('user typeof: ', user)
    console.log('stats: ', stats)

    return (
        <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt={avatar}
            className="avatar"
          />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
      
{stats && <ul className="stats">
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
        </ul>}
      </div>
    )
}

Profile.propTypes = {
user: PropTypes.object,
stats: PropTypes.object
}