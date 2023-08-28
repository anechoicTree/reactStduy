import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterHandler = (selectedDatas) => {
    const selectedData = {
        ...selectedDatas,
    };
    setFilteredYear(selectedData.year);
    console.log('In Expenses.js');
    console.log(selectedData.year);
  };

    return (
      <Card className='expenses'>
        <div>
          <ExpensesFilter selected={filteredYear} saveFiltered={filterHandler} />
        </div>
        <div>
          {props.items.map(expense => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />)}
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