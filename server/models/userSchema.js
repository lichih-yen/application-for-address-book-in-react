const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add the fisrt name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add the last name"],
  },
  email: {
    type: String,
    required: [true, "Please add a email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Please add a phone number"],
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = users;
