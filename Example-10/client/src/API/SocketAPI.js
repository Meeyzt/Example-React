import io from "socket.io-client";

let socket;

export const init = () => {
  const URL = "http://localhost:3000";

  console.log("bağlanılıyor ...");

  socket = io(URL, {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("bağlantı başarılı");
  });
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (callback) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("yeni mesaj ", message);
    callback(message);
  });
};

export const subscribeInitialMessages = (callback) => {
  if (!socket) return;

  socket.on("message-list", (messages) => {
    console.log("initial ", messages);
    callback(messages);
  });
};
