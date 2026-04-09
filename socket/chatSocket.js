import Message from "../models/Message.js";

export function registerChatSocket(io) {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("chat:message", async (payload) => {
      try {
        const username = String(payload?.username || "").trim();
        const text = String(payload?.text || "").trim();

        if (!username || !text) {
          return;
        }

        if (username.length > 30 || text.length > 500) {
          return;
        }

        const newMessage = await Message.create({
          username,
          text,
        });

        io.emit("chat:message", newMessage);
      } catch (error) {
        console.error("Socket message error:", error.message);
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id} `);
    });
  });
}
