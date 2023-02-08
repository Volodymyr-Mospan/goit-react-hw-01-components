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
        {items.map(items => (
          <tr key={items.id} className={css['transaction-history__row']}>
            <td className={css['transaction-history__data']}>{items.type}</td>
            <td className={css['transaction-history__data']}>{items.amount}</td>
            <td className={css['transaction-history__data']}>
              {items.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
