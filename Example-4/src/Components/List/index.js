import { useEffect, useState } from "react";
import ListItem from "./ListItem";

function List({ newTodos, isChecked, isClicked }) {
  const [todos, setTodos] = useState([...newTodos]);
  useEffect(() => {
    let todsos = [...newTodos].map((item) => {
      return isClicked ? { ...item, isCompleted: isChecked } : item;
    });
    setTodos(todsos);
  }, [isChecked]);

  return (
    <ul className="todo-list">
      {todos.map((item, i) => {
        return <ListItem item={item} key={i} />;
      })}
    </ul>
  );
}

export default List;
