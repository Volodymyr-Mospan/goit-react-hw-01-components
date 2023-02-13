import styled from 'styled-components';
import { boxShadow } from 'Styled/variebleStyled';

export const TransactionTable = styled.table`
  width: calc((100% - (3 * 35px)) / 4);

  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  text-align: center;
  font-size: 20px;

  background-color: #fafcffee;
  box-shadow: ${boxShadow};

  overflow: hidden;
  min-width: min-content;
  border-collapse: collapse;
`;

export const TransactionTableTitle = styled.th`
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 10px 50px;
  background-color: #bfd2fcad;
`;

export const TransactionTableData = styled.td`
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 10px 50px;
  text-transform: capitalize;
`;

export const TransactionTableRow = styled.tr`
  &:nth-child(2n) {
    background-color: #bfd2fc62;
  }
`;
