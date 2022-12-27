import { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ items }) => {
  const [expensesYear, setExpensesYear] = useState('2022');

  const selectExpensesYearHandler = (selectedExpensesYear) => {
    setExpensesYear(selectedExpensesYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onSelectExpensesYear={selectExpensesYearHandler}
        selectedExpensesYear={expensesYear}
      />
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

Expenses.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.objectOf(PropTypes.string),
      ])
    )
  ).isRequired,
};

export default Expenses;
