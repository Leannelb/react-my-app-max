import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0, id: 0 },
        { label: 'Feb', value: 1, id: 1 },
        { label: 'Mar', value: 2, id: 2 },
        { label: 'Apr', value: 3, id: 3 },
        { label: 'May', value: 4, id: 4 },
        { label: 'Jun', value: 5, id: 5 },
        { label: 'Jul', value: 6, id: 6 },
        { label: 'Aug', value: 7, id: 7 },
        { label: 'Sep', value: 8, id: 8 },
        { label: 'Oct', value: 9, id: 9 },
        { label: 'Nov', value: 10, id: 10 },
        { label: 'Dec', value: 11, id: 11 },
    ];

    for (const expense of props.expenses) {
        console.log('expense from ExpensesChart.js ', expense)
        const expenseMonth = expense.date.getMonth(); // starting at 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;