import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: 'Car insurance', amount: 234.23, date: new Date(2021, 2,23)},
    { title: 'Home insurance', amount: 134.33, date: new Date(2021, 2,26)},
    { title: 'Fire insurance', amount: 34.55, date: new Date(2021, 2,20)},
  ];

  const addExpenseHandler = expense => {
    console.log('App.js');
    console.log('expenses ', expense);
  }
  return (
   <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
   </div>
  );
}

export default App;
