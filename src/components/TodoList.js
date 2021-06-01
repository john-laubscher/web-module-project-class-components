import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.clearPurchased();
  };

  return (
    <div>
      {props.todo.map((task) => (
        <Todo key={task.id} toggleTask={props.toggleTask} task={task} />
      ))}
      <button onClick={handleClick}>Clear Purchased</button>
    </div>
  );
};

export default TodoList;
