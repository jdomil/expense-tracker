import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';

import './Expenses.css';

const Expenses = ({ items }) => (
  <Card className='expenses'>
    <ExpenseItem
      title={items[0].title}
      date={items[0].date}
      amount={items[0].amount}
    />
    <ExpenseItem
      title={items[1].title}
      date={items[1].date}
      amount={items[1].amount}
    />
    <ExpenseItem
      title={items[2].title}
      date={items[2].date}
      amount={items[2].amount}
    />
    <ExpenseItem
      title={items[3].title}
      date={items[3].date}
      amount={items[3].amount}
    />
  </Card>
);

Expenses.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Expenses;
