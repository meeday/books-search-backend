const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
