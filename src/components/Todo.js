import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.toggleItem(props.item.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`task${props.task.purchased ? "purchased" : ""}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;
