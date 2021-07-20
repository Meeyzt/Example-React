import React from "react";
import ClearButton from "./ClearButton";

function Footer({ newTodos }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{newTodos.length} </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a className="selected">All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>
      <ClearButton />
    </footer>
  );
}

export default Footer;
