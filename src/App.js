import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todosList, setTodosList] = useState([]);

  // function addTodo(todo) {
  //   setTodosList([todo, ...todosList]);
  // }

function toggleComplete(id) {
  setTodosList(
    todosList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  );
}

function removeTodo(id) {
  setTodosList(todosList.filter(todo => todo.id !== id));
}

  return (
    <div className="App">
      <header className="App-header">
        <p>To-Do List</p>
        <TodoForm
        todosList={todosList}
        setTodosList={setTodosList}  />
        <TodoList 
        todosList={todosList}
        setTodosList={setTodosList} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo} 
        />
      </header>
    </div>
  );
}

export default App;
