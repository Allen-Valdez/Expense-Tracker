import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
	const [year, setYear] = useState('2023');

	const filterByYear = selectedYear => {
		setYear(selectedYear);
	};

	const renderExpenses = expenses => {
		return expenses.map(expense => {
			return <ExpenseItem expense={expense} key={expense.id} />;
		});
	};

	return (
		<Card className='expenses'>
			<ExpensesFilter currYear={year} filterYear={filterByYear} />
			{renderExpenses(expenses)}
		</Card>
	);
};

export default Expenses;
