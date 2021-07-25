import { useState } from "react";
import styles from "./style.module.css";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");
  const { messages, setMessages } = useChat();
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ChatForm;
