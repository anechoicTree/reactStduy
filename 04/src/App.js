import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense';

// don't change the Component name "App"
const App = () => {
    const expenses = [
      {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
      {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
      {id: 'e3', title: 'Car Insurance3', amount: 294.67, date: new Date(2021, 2, 28)},
      {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)}
    ];

    const addExpenseHandler = (expense) => {
      console.log('In App.js');
      console.log(expense);
    };

    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
    );
    // return React.createElement(
    //   'div',
    //   {}, 
    //   React.createElement('h2', {}, "Let's get started!"), 
    //   React.createElement(Expenses, {expenses:expenses})
    //   );
      // <div>
      //   <h2>Let's get started!</h2>
      //   <Expenses expenses={expenses}/>
      // </div>
};

export default App;

// <h1> 태그 내용을 분리해서 별도의 컴포넌트로 만들기
// ExerciseComponent를 만들어서 "First exercise - done!" 출력
// ExpenseItem을 만들어서 "Expense item!" 출력
