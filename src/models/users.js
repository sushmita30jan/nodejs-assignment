// we can create saperate file for mongoDB connectivity
//connect to mongoDB

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/userAuth")
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.error("could not connect to mongoDB", err));

//create Schema

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
