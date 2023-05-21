import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
	let { date, title, amount } = expense;
	console.log('ExpenseItem evaluated by React');

	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
