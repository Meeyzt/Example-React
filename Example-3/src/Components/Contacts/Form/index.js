import { useState, useEffect } from "react";

function Form({ contacts, addContact }) {
  const initContactValues = { fullname: "", phone_number: "" };
  const [contact, setContact] = useState(initContactValues);

  const onSubmit = () => {
    if (contact.fullname !== "" && contact.phone_number !== "") {
      addContact([...contacts, contact]);
    }
  };
  useEffect(() => {
    setContact(initContactValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="fullname">
        <input
          name="fullname"
          value={contact.fullname}
          placeholder="Fullname"
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="phoneNumber">
        <input
          name="phone_number"
          value={contact.phone_number}
          placeholder="Phone Number"
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="btn">
        <button onClick={onSubmit}>Add Contact</button>
      </div>
    </div>
  );
}

export default Form;
