import './ExpenseItem.css';

import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) =>  {
    const [title, setTitle] = useState(props.title);
    // use state you always get 2 values, the var and the function to change it
    // use state registers state for a specific component instance
    // by using state react is doing the update for us

    const clickHandler = () => {
        setTitle('Updated');
        console.log('clicked!!! ');
    }

    return (
        <Card className="expense-item" >
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description" >
                <h2>{title}</h2>
                <div className="expense-item__price" > ${props.amount} </div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;