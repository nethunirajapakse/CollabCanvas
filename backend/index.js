const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS for specific origin (customize as needed)
app.use(
  cors({
    origin: "http://localhost:5000",
  })
);

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (data) => {
    console.log("Message received:", data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Server is running on port 3000!");
});

app.get("/message", (req, res) => {
  res.json({ message: "Server is running on port 3000!" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
