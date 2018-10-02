const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/" + "expressjs";

mongoose.connect(url,{ useNewUrlParser: true, useCreateIndex: true });

mongoose.connection
  .once("open", () => console.log("connected to the database"))
  .on("error", () => console.error("Error connecting the database"));

mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//user route
app.use("/user", require("./routes/users.routes"));

app.get("*", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
