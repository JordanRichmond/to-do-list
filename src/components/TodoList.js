import React from 'react';
import Todo from "./Todo";

function TodoList({ todosList, toggleComplete, removeTodo }) {
    return (
        <ul>
            {todosList.map(todo => {
                <Todo 
                key={todo.id} 
                todo={todo} 
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                />
            })}
        </ul>
    );
}

export default TodoList;