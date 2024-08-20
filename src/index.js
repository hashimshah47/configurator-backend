const express = require('express');
const cors = require('cors');
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

require('./routes/auth.route')(app)
require('./routes/user.route')(app)


db.mongoose.connect('mongodb://127.0.0.1:27017/configurator');
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
