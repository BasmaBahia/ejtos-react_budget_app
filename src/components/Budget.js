import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (newBudget > 20000) {
            alert("Budget may not exceed 20,000")
            setNewBudget(20000);
            return;
        }
        if (newBudget < (budget - totalExpenses)) {
            alert("Budget may not be lower than amount spent");
            setNewBudget(totalExpenses);
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
