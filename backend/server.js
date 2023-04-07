const express = require("express");
const app = express();
const port = 3000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/post", require("./routes/post.routes"));





app.listen(port, (req, res) => {
  console.log("Server is running at " + port);
});
