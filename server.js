const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const db = new sqlite3.Database(':memory:');

app.use(cors());
app.use(express.json());

// Create table
db.serialize(() => {
  db.run('CREATE TABLE assets (id INTEGER PRIMARY KEY AUTOINCREMENT, lat REAL, lng REAL)');
});

// Get all assets
app.get('/api/assets', (req, res) => {
  db.all('SELECT * FROM assets', [], (err, rows) => {
    res.json(rows);
  });
});

// Add asset
app.post('/api/assets', (req, res) => {
  const { lat, lng } = req.body;
  db.run('INSERT INTO assets (lat, lng) VALUES (?, ?)', [lat, lng], function(err) {
    res.json({ id: this.lastID, lat, lng });
  });
});

// Delete asset
app.delete('/api/assets/:id', (req, res) => {
  db.run('DELETE FROM assets WHERE id = ?', [req.params.id], function(err) {
    res.sendStatus(204);
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));