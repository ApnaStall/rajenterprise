const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },     // phone OR email
  password: { type: String, required: true },
  role: { type: String, default: "user" }        // admin or user
});

module.exports = mongoose.model("User", userSchema);
