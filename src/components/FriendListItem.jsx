import styled from 'styled-components'

// TODO 
//В зависимости от пропа isOnline, должен меняться цвет фона span.status.
// Это можно сделать через разный CSS-класс или Styled Components.

export const Span = styled.span`
color: ${({theme}) => theme.colors.secondary}
`;

export const FriendListItem = ({ friend}) => {
    const { name, isOnline, avatar, id } = friend;

    return (
        <>
   <li className="item" key={id}>
  <Span className={isOnline ? Span.color : 'offline'}></Span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
 </>
 )
}