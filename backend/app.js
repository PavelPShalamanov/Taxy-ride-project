const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json()); // To parse JSON bodies

// Your magical endpoint
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Data received:', data);

  // You could validate, save to a DB, or judge their handwriting
  res.status(200).json({ message: 'Form received!', received: data });
});

module.exports = app