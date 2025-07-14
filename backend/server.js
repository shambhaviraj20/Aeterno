const express = require('express');
const cors = require('cors'); // Add this line
const pool = require('./db');
const app = express();

app.use(cors()); // Now this will work

app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products WHERE era_id = 3');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));