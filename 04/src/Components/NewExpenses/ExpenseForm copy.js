import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // 별개로 관리
    const [enteredTitle, setEnteredTitle] = React.useState(''); 
    const [enteredAmount, setEnteredAmount] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState('');

    // 묶어서 관리
    // const [userInput, setUserInput] = React.useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     selectedDate:''
    // });

    // document.getElementById('').addEventListener('click', (event) => {});
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });
        // console.log(userInput.enteredTitle);
        // console.log(enteredTitle);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     };
        // });
        // console.log(enteredAmount);
    };
    const dateChangeHandler = (event) => {
        setSelectedDate(event.target.value);
        // setUserInput({ ...userInput,
        //     selectedDate: event.target.value
        // });
        // console.log(selectedDate);
    };
    const inputChangeHandelr = (identifier, value) => {
        if(identifier === 'title') {
            setEnteredTitle(value);
        } else if(identifier === 'date') {
            setSelectedDate(value);
        } else {
            setEnteredAmount(value);
        }
    };
    return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={(event)=>{inputChangeHandelr('title',event.target.value)}}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={(event)=>{inputChangeHandelr('amount',event.target.value)}}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={(event)=>{inputChangeHandelr('date',event.target.value)}}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button> 
        </div>
    </form>
    );
};

export default ExpenseForm;