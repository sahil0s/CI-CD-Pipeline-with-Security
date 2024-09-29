// src/Todo.js
import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
      {todo.text}
      <div className="todo-buttons">
        <button className="complete" onClick={() => completeTodo(index)}>✓</button>
        <button className="remove" onClick={() => removeTodo(index)}>✗</button>
      </div>
    </div>
  );
};

export default Todo;
