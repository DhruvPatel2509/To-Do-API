const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

const toddoRoute = require("./routes/todos");

app.use("/api/v1", toddoRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1> Dhruv Patel </h1>`);
});

const dbConnect = require("./config/database");
dbConnect();
