import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
    <ul className="friend-list">
    {friends.map(({avatar, name, isOnline}) => (
   <li className="item" key={name}>
  <span className={isOnline ? 'online' : 'offline'}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
 ))}
</ul>)
}

FriendList.propTypes = {

friends: PropTypes.arrayOf( 
    PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string, 
        isOnline: PropTypes.bool
    })
)    
}