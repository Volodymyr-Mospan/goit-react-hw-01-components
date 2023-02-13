import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableTitle,
  TransactionTableData,
  TransactionTableRow,
} from './TransactionHistory.styled';

// import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionTableTitle>Type</TransactionTableTitle>
          <TransactionTableTitle>Amount</TransactionTableTitle>
          <TransactionTableTitle>Currency</TransactionTableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionTableRow key={item.id}>
            <TransactionTableData>{item.type}</TransactionTableData>
            <TransactionTableData>{item.amount}</TransactionTableData>
            <TransactionTableData>{item.currency}</TransactionTableData>
          </TransactionTableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
