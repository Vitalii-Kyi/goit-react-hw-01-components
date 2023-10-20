import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { PaymentTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <PaymentTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </PaymentTable>
  );
};