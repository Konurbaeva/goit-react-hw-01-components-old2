export const FriendListItem = ({ friend}) => {
    const { name, isOnline, avatar, id } = friend;

    return (
        <>
   <li className="item" key={id}>
  <span className={isOnline ? 'online' : 'offline'}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
 </>
 )
}