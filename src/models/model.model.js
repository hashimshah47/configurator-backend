const mongoose = require("mongoose");

const Model = mongoose.model("Model", new mongoose.Schema({
    name: String,
    number: String,
    price: Number,
  })
);

module.exports = Model;