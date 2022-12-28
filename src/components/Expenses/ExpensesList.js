import PropTypes from 'prop-types';

import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

ExpensesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.objectOf(PropTypes.string),
      ])
    )
  ).isRequired,
};

export default ExpensesList;
