const mongoose = require("mongoose");

const user = mongoose.model("User", {
  name: String,
  email: {
    type: String,
    required: 'email is required',
    unique: true
  }
});

module.exports = user;
