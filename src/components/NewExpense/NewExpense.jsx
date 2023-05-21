import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
	const saveExpenseData = expenseData => {
		const updatedExpense = {
			...expenseData,
			id: Math.random().toString(),
		};
		onAddExpense(updatedExpense);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseData} />
		</div>
	);
};

export default NewExpense;
