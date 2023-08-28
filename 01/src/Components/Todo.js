import React from 'react';

export default function Todo(props) {
    return (
        props.todos.map(todoArray => <li>할 일: {todoArray}</li>)
    );
}