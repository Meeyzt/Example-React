import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import Main from "./Main";
import FooterInfo from "./Footer/FooterInfo";

function Components() {
  const initTodosValues = [
    { todoText: "Learn JavaScript", isCompleted: true },
    { todoText: "Learn React", isCompleted: true },
    { todoText: "Have a life!", isCompleted: false },
  ];
  useEffect(() => {});
  const [newTodos, setNewTodos] = useState(initTodosValues);
  return (
    <div>
      <section className="todoapp">
        <Header newTodos={newTodos} addNewTodos={setNewTodos} />
        <Main newTodos={newTodos} />
        <Footer newTodos={newTodos} />
      </section>
      <FooterInfo />
    </div>
  );
}

export default Components;
