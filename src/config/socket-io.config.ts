import { Server } from "socket.io";


class SocketIO {
  private io: Server;
  private PORT = 4001;
  constructor() {
    this.io = new Server(this.PORT, {
      cors: {
        origin: "*",
      },
    });
    this.io.on("connection", (socket) => {
      console.log("a user connected");
      // console log any message received from the client (everything)
      socket.onAny((event, ...args) => {
        console.log(event, args);
      });
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
}

export { SocketIO };