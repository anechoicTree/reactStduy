import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('');

  const filterHandler = (selectedDatas) => {
    const selectedData = {
        ...selectedDatas,
    };
    setFilteredYear(selectedData.year);
  };

  const allExpenses = props.items.map((expense) => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} /> );

    return (
      <Card className='expenses'>
        <div>
          <ExpensesFilter selected={filteredYear} saveFiltered={filterHandler} />
        </div>
        <div>
          {filteredYear === '' ? allExpenses : allExpenses.filter((expense) => expense.props.date.getFullYear().toString() === filteredYear)}
        </div>
        {/* <div>
          <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount}/>
        </div>
        <div>
          <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount}/>
        </div>
        <div>
          <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount}/>
        </div>
        <div>
          <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title} amount={props.expenses[3].amount}/>
        </div> */}
      </Card>
    )
};

export default Expenses;