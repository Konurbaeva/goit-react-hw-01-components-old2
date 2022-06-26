import styled from 'styled-components'

const Span = styled.span(({ isOnline }) => ({
    background: isOnline ? 'green' : 'red'
  }));

export const FriendListItem = ({ friend }) => {
    const { name, isOnline, avatar, id } = friend;
    
    return (
        <>
   <li className="item" key={id}>
  <Span 
  isOnline={isOnline}
   ></Span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <Span 
  isOnline={isOnline}
   >{name}</Span>
</li>
 </>
 )
}