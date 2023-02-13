import styled from 'styled-components';
import { boxShadow } from 'Styled/variebleStyled';

export const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc((100% - (3 * 35px)) / 4);

  padding: 15px;

  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  text-align: center;
  font-size: 20px;

  background-color: #fafcffee;
  box-shadow: ${boxShadow};

  overflow: hidden;
  min-width: min-content;
`;

export const ItemListOfFriends = styled.li`
  display: flex;
  align-items: center;

  padding: 5px 15px;

  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: ${boxShadow};
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  ${props =>
    props.isOnline ? `background-color: green` : `background-color: red`};
`;

export const FrendAva = styled.img`
  margin: 0 15px;
`;
