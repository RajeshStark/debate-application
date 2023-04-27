const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    displayname: String,
    username: String,
    email: String,
    password: String,

  })
);

module.exports = User;
