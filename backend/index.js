const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

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
  res.send("Server is running on port 3000!"); //sending plain text
});

app.get("/message", (req, res) => {
  res.json({ message: "Server is running on port 3000.." }); //sending JSON-encoded data.
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

import { MongoClient, ServerApiVersion } from "mongodb";

const URI =
  "mongodb+srv://nethunirajapakse:<nethunirajapakse>@cluster1.0hr7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
