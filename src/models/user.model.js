const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    company: String,
    marketing:Boolean,
  })
);

module.exports = User;