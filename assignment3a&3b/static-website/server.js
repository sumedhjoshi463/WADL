// server.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userRoutes=require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/Assignment3a';

// Connect to MongoDB using Mongoose
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check for MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up Express to serve static files
app.use(express.static(path.join(__dirname, 'public/htmls')));

app.use('/routes/userRoutes', userRoutes);

// Define your routes or any other middleware here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
