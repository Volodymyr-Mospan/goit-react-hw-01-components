import styled from 'styled-components';
import { boxShadow } from 'Styled/variebleStyled';

export const ProfileCard = styled.div`
  width: calc((100% - (3 * 35px)) / 4);

  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  text-align: center;
  font-size: 20px;

  background-color: #fafcffee;
  box-shadow: ${boxShadow};

  overflow: hidden;
  min-width: min-content;
`;

export const ProfileAva = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 110px;

  margin: 25px 40px 10px 40px;

  box-shadow: ${boxShadow};
`;

export const ProfileName = styled.p`
  font-size: 25px;
`;
export const ProfileTag = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;

export const ProfileStatsList = styled.ul`
  display: flex;
  background-color: #bfd2fcad;
`;

export const ProfileStatsItem = styled.li`
  width: calc(100% / 3);
  padding: 10px 10px 25px 10px;

  text-transform: capitalize;
  border-top: 1px solid rgba(0, 0, 0, 0.6);
`;

export const ProfileStatsLable = styled.ul`
  display: block;
`;
