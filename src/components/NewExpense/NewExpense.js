import { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [newExpenseContent, setNewExpenseContent] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setNewExpenseContent(false);
  };

  const addExpenseHandler = () => {
    setNewExpenseContent(true);
  };

  const cancelAddExpenseHandler = () => {
    setNewExpenseContent(false);
  };

  return (
    <div className='new-expense'>
      {!newExpenseContent && (
        <button type='button' onClick={addExpenseHandler}>
          Add New Expense
        </button>
      )}
      {newExpenseContent && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddExpense={cancelAddExpenseHandler}
        />
      )}
    </div>
  );
};

NewExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};

export default NewExpense;
