const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/contact", require("./routes/contactRoutes"));

mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
.then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server running on 5000"));
})
.catch(err => console.log(err));
