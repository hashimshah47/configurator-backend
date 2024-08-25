const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    rotation: [],
    position: [],
    shape: String,
  });
  
const Configuration = mongoose.model("Configuration", new mongoose.Schema({
    username: String,
    model: [modelSchema],
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true, 
        },
    projectName: String
    }),
);

module.exports = Configuration