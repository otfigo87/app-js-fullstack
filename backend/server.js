const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const port = 3000;

dotenv.config()

//connect to MDB
connectDB();

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//routes
app.use("/post", require("./routes/post.routes"));





app.listen(port, (req, res) => {
  console.log("Server is running at " + port);
});
