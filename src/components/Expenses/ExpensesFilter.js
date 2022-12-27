import PropTypes from 'prop-types';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onSelectExpensesYear, selectedExpensesYear }) => {
  const selectHandler = (event) => {
    onSelectExpensesYear(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <label htmlFor='year' className='expenses-filter__control'>
        Filter by year
        <select
          name='year'
          id='year'
          className='expenses-filter__control--dropdown'
          onChange={selectHandler}
          value={selectedExpensesYear}
        >
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </label>
    </div>
  );
};

ExpensesFilter.propTypes = {
  onSelectExpensesYear: PropTypes.func.isRequired,
  selectedExpensesYear: PropTypes.string.isRequired,
};

export default ExpensesFilter;
