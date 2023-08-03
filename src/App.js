import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Todo List</h1>
      <div className="text-center mb-2">There are 0 todos left</div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a new todo..."
          className="todo-form-input form-control"
        />
        <button className="todo-form-button btn btn-primary">
          <FontAwesomeIcon icon={faAdd} />
        </button>
      </form>
      <div className="todo-list">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default App;
