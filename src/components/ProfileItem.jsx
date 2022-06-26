export const ProfileItem = ({ avatar, username, tag, location}) => {
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
        </div>
    )
}