import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    } 


    return (
        <Card>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        </Card>
      )  
}

export default NewExpense;