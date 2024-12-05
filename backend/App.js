const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors'); // Import CORS middleware

const app = express();

// Use CORS middleware
app.use(cors());

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Export the app instance
module.exports = app;
