import React from "react"
import TodoListItem from "../todo-list-item";
import './todo-list.scss'

const TodoList = ({ data, onDeleted, onToggleImportant, onToggleDone }) => {
  console.log(data, typeof data)
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={ id }>
        <TodoListItem
          { ...itemProps }
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDeleted={() => onDeleted(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
