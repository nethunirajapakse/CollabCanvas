const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // Serve static files from the 'public' directory

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
