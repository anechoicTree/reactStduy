import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");
  // 실행 시 props.title 값이 title에 들어가고, useState 훅이 동작하면 setTitle이 title 자리에 가고 다시 렌더링 되는 것.
  
  const clickHandler = () => {
    setTitle('upDated!');
    console.log(title); // clickHandler 동작 이후에 useState 훅이 순차적으로 동작
  }
    return (
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.date}/>
        </div>
        <div className="expense-item__description">
            <h2>{title}</h2>
        </div>
        <Card className="expense-item__price">
            ${props.amount}
        </Card>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    )
};

export default ExpenseItem;