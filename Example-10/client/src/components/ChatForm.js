import { useState } from "react";
import styles from "./style.module.css";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../API/SocketAPI";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { setMessages } = useChat();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);
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
