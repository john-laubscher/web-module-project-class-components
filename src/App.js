import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
  {
    name: "Wash clothes",
    id: 6121,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  toggleItem = (id) => {
    console.log("id: ", id);
    const newTodo = this.state.todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          purchased: !item.purchased,
        };
      } else {
        return item;
      }
    });

    this.setState({
      todo: newTodo,
    });
  };

  addTask = (task) => {
    const newtask = {
      name: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todo: [...this.state.todo, newtask],
    });
  };

  clearPurchased = () => {
    const newTodo = this.state.groceries.filter((item) => {
      return item.purchased === false;
    });

    this.setState({
      todo: newTodo,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <div>
          <TodoList
            clearPurchased={this.clearPurchased}
            toggleItem={this.toggleItem}
            todo={this.state.todo}
          />
        </div>
      </div>
    );
  }
}

export default App;
