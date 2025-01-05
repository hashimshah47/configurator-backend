const mongoose = require("mongoose");

const Model = mongoose.model("Model", new mongoose.Schema({
    name: String,
    number: String,
    price: Number,
    company: String,
    category: String
  })
);

module.exports = Model;