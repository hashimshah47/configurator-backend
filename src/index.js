const express = require('express');
const cors = require('cors');
const db = require("./models");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;
// CORS configuration
const corsOptions = {
  origin: 'https://localhost:5173', // Allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));
require('./routes/auth.route')(app)
require('./routes/user.route')(app)
require('./routes/configuration.route')(app)



db.mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Conencted to database")
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
