import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("sunucuya bağlanılıyor!..");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("Sunucuya bağlanıldı");
  });
};
