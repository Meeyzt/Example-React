import React, { useState, useEffect } from "react";
import List from "../List";
import InputCheckbox from "./Inputcheckbox";

function Main({ newTodos }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const onCheckedChange = () => {
    setIsChecked((p) => !p);
  };
  useEffect(() => {
    if (isClicked === false) {
      setIsClicked(true);
    }
  }, [isClicked]);
  return (
    <section className="main">
      <InputCheckbox isChecked={isChecked} onCheckedChange={onCheckedChange} />
      <List newTodos={newTodos} isChecked={isChecked} isClicked={isClicked} />
    </section>
  );
}

export default Main;
