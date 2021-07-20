import React from "react";
import Input from "../Main/Input";

function Header({ newTodos, addNewTodos }) {
  return (
    <header className="header">
      <h1>TODO APP</h1>
      <Input newTodos={newTodos} addNewTodos={addNewTodos} />
    </header>
  );
}

export default Header;
