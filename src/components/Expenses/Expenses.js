import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
