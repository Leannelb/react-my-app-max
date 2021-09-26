import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { title: 'Car insurance', amount: 234.23, date: new Date(2021, 2, 23) },
  { title: 'Home insurance', amount: 134.33, date: new Date(2021, 2, 26) },
  { title: 'Fire insurance', amount: 34.55, date: new Date(2021, 2, 20) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [ expense, ...prevExpenses]
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
