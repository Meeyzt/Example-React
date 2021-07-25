import styles from "./style.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

function ChatList() {
  const { messages } = useChat();
  console.log(messages);
  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((msg, key) => (
          <ChatItem key={key} item={msg} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
