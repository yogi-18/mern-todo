const mongoose = require("mongoose");

module.exports = mongoose.model(
  "todo",
  mongoose.Schema({
    task: {
      type: String,
      required: true,
    },
    desc: String,
    complete: Boolean,
    priority: Number,
  })
);
