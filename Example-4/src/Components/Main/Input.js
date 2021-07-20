import { useState, useEffect } from "react";

function Input({ newTodos, addNewTodos }) {
  const iniTodoValues = { todoText: "", isCompleted: false };
  const [newTodo, setNewTodo] = useState(iniTodoValues);

  useEffect(() => {
    setNewTodo(iniTodoValues);
  }, [newTodos]);

  const addTodo = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  const addTodos = (e) => {
    e.preventDefault();
    addNewTodos([...newTodos, newTodo]);
  };
  return (
    <form onSubmit={addTodos}>
      <input
        name="todoText"
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTodo.todoText}
        onChange={addTodo}
        autoFocus
      />
    </form>
  );
}

export default Input;
