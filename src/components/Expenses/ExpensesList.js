import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    let expenseContent = <p className="expenses-filter__control">no expenses available</p>;

    console.log('props ', props);

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expense</h2>
    }

    return (
        <ul className="expenses-list">
            {expenseContent =
                props.items.map((expense) =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
        </ul>
    )
}

export default ExpensesList;
