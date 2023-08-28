import React from 'react';
import './styles.css';
import Todo from './Components/Todo';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!',
    'hi'
];

// don't change the Component name "App"
export default function App() {
    return (
      <ul>
        <Todo todos={DUMMY_TODOS} />
        {/* {DUMMY_TODOS.map((todo) => (<Todo text={todo}) />} */}
      </ul>
    );
};