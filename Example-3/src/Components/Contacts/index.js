import "./styles.css";
import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Mehmet", phone_number: "1123" },
    { fullname: "Ahmet", phone_number: "14443" },
    { fullname: "Turhan", phone_number: "12233" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}

export default Contacts;
