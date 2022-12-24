import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount }) => (
  <Card className='expense-item'>
    <ExpenseDate date={date} />
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>€{amount}</div>
    </div>
  </Card>
);

ExpenseItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseItem;
