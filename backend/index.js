import express from "express"; // Import express
import http from "http"; // Import http
import { Server } from "socket.io"; // Import Server from socket.io
import cors from "cors"; // Import cors

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server); // Create a socket.io server

app.use(cors()); // Enable CORS for your app

app.get("/", (req, res) => {
  res.send("Server is running on port 3000!");
});

app.get("/message", (req, res) => {
  res.json({ message: "Server is running on port 3000.." });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Socket.io connection example
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Handle socket events here
});

import { MongoClient, ServerApiVersion } from "mongodb";

const URI =
  "mongodb+srv://nethunirajapakse:nethunirajapakse@cluster1.0hr7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
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
