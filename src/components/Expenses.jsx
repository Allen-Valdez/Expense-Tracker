import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = ({expenses}) => {
	return (
		<Card className="expenses">
			<ExpenseItem expenses={expenses[0]} />
			<ExpenseItem expenses={expenses[1]} />
			<ExpenseItem expenses={expenses[2]} />
			<ExpenseItem expenses={expenses[3]} />
		</Card>
	);
};

export default Expenses;
