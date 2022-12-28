import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = ({ items }) => {
  const [expensesYear, setExpensesYear] = useState('2020');

  const selectExpensesYearHandler = (selectedExpensesYear) => {
    setExpensesYear(selectedExpensesYear);
  };

  const filteredItems = items.filter(
    (item) => item.date.getFullYear() === Number.parseInt(expensesYear, 10)
  );

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          onSelectExpensesYear={selectExpensesYearHandler}
          selectedExpensesYear={expensesYear}
        />
        <ExpensesList items={filteredItems} />
      </Card>
    </li>
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
