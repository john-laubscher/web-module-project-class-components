import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="taskName" />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}
export default TodoForm;
