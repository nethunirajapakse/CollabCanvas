const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors"); // Import cors

const app = express();
const port = 3000;

// Enable CORS for all origins (or configure as needed)
app.use(cors());

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

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
