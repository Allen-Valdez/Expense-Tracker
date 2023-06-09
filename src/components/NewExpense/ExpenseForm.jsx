import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
	const emptyForm = {
		title: '',
		amount: '',
		date: '',
	};
	const [formData, setFormData] = useState(emptyForm);
	const { title, amount, date } = formData;

	const onFormDataChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData(prevState => {
			return { ...prevState, [name]: value };
		});
	};

	const onFormSubmit = e => {
		e.preventDefault();
		const expenseData = {
			...formData,
			date: new Date(date),
		};
		onSaveExpenseData(expenseData);
		setFormData(emptyForm);
	};

	return (
		<form onSubmit={onFormSubmit}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' name='title' onChange={onFormDataChange} value={title} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' name='amount' onChange={onFormDataChange} value={amount} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2020-01-01' max='2023-12-31' name='date' onChange={onFormDataChange} value={date} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
