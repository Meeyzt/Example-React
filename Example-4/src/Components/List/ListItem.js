import { useState } from "react";

function ListItem({ item, key }) {
  console.log(item.isCompleted);
  const [isChecked, setIsChecked] = useState(item.isCompleted);
  const onChangeCheck = (key) => {
    setIsChecked((p) => !p);
  };

  return (
    <li className={`${item.isCompleted ? "completed" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={() => onChangeCheck(key)}
        />
        <label>{item.todoText}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
}

export default ListItem;
