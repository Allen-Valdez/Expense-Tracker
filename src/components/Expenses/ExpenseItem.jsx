import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import {useState} from 'react';

const ExpenseItem = ({ expenses }) => {
  const [expense, setExpense] = useState(expenses);
  let {date, title, amount} = expense;
  console.log("ExpenseItem evaluated by React");
  
  const changeTitleHandler = e => {
    const newTitle = 'Updated Title';
    setExpense({...expenses, title: newTitle});
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
			<button name='title' onClick={changeTitleHandler}>
				Change Title
			</button>
		</Card>
	);
};

export default ExpenseItem;
