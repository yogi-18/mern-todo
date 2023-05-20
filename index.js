const express = require("express");
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const cors = require("cors");
const {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("./controller/todoController");

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
app.use(cors());
app.post("/todo/add", addTodo);
app.get("/todo", getTodo);
app.put("/todo/:id", updateTodo);
app.delete("/todo/:id", deleteTodo);

mongoose.connection.once("open", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MONGO CONNECTED");
    app.listen(5000, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("SERVER RUNNING  :  http://localhost:5000");
      }
    });
  }
});
