import React from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import {
  init,
  subscribeChat,
  subscribeInitialMessages,
} from "../API/SocketAPI";
import { useEffect } from "react";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
    subscribeInitialMessages((messages) => {
      setMessages(messages);
      console.log(messages);
    });
  }, []);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
