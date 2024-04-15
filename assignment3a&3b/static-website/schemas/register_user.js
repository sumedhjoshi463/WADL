// Define a Mongoose schema for registering a user
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true }
});

// Create a Mongoose model for the registered user
const RegisteredUser = mongoose.model('RegisteredUser', userSchema);


module.exports = RegisteredUser;