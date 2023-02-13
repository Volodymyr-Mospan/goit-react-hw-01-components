import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th className={css['transaction-history__title']}>Type</th>
          <th className={css['transaction-history__title']}>Amount</th>
          <th className={css['transaction-history__title']}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css['transaction-history__row']}>
            <td className={css['transaction-history__data']}>{item.type}</td>
            <td className={css['transaction-history__data']}>{item.amount}</td>
            <td className={css['transaction-history__data']}>
              {item.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
