import { useState } from 'react';
import PropTypes from 'prop-types';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler} action=''>
      <div className='new-expense__controls'>
        <label htmlFor='title' className='new-expense__control--label'>
          Title
          <input
            className='new-expense__control--input'
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </label>
        <label htmlFor='amount' className='new-expense__control--label'>
          Amount
          <input
            type='number'
            min='0.01'
            step='0.01'
            className='new-expense__control--input'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </label>
        <label htmlFor='date' className='new-expense__control--label'>
          Date
          <input
            type='date'
            min='2020-01-01'
            max='2025-12-31'
            className='new-expense__control--input'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </label>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired,
};

export default ExpenseForm;
