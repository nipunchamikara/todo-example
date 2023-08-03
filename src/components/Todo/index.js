import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  return (
    <div className="todo">
      <input type="checkbox" className="todo-checkbox form-check-input" />
      <div className="todo-text">Todo</div>
      <div className="todo-actions">
        <button className="todo-action-delete">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
