const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Add this middleware to set a more permissive CSP header
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src *;");
  next();
});

app.use(cors());
app.use(express.json());

// Rest of your code...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
