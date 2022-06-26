import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

// TODO 
//В зависимости от пропа isOnline, должен меняться цвет фона span.status.
// Это можно сделать через разный CSS-класс или Styled Components.


export const FriendList = ({friends}) => {
    return (
<>
<ul className="friend-list">
    {friends.map((friend) => (
  <FriendListItem  friend={friend} key={friend.id}/>
  ))}
</ul>
</>
)
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