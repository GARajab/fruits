require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;
const morgan = require("morgan");
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`connection established ${mongoose.connection.name}`);
});
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
