import { useState } from 'react';
import PropTypes from 'prop-types';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = ({ title, date, amount }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle('Updated!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>€{amount}</div>
      </div>
      <button type='button' onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
};

ExpenseItem.propTypes = {
  date: PropTypes.objectOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default ExpenseItem;
