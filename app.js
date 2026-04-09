import express from "express";
import dotenv from "dotenv";
import { connectDB, closeDatabaseConnection } from "./config/db.js";
import http from "http";
import { Server } from "socket.io";
import { registerChatSocket } from "./socket/chatSocket.js";
import cors from "cors";
import Message from "./models/Message.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.json({
//     message: "Server is running",
//   });
// });

app.get("/api/message", async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    res.json(messages.reverse());
  } catch (error) {
    res.status(500).json({
      message: "Failed to get messages",
    });
  }
});

async function startServer() {
  try {
    await connectDB();

    const server = http.createServer(app);

    const io = new Server(server, {
      cors: {
        origin: process.env.CLIENT_URL,
        credentials: true,
      },
    });

    registerChatSocket(io);

    server.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();

process.on("SIGINT", async () => {
  console.log("Завершение работы приложения");
  await closeDatabaseConnection();
  process.exit(0);
});
