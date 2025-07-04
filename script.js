const express = require('express');
const app = express();
app.use(express.json());

let assets = []; // ใช้ Array เก็บชั่วคราว, จริงๆ ควรใช้ Database

// API อัปเดตตำแหน่ง
app.post('/updateLocation', (req, res) => {
  const { id, lat, lng } = req.body;
  const index = assets.findIndex(a => a.id === id);
  if (index >= 0) {
    assets[index].lat = lat;
    assets[index].lng = lng;
    assets[index].updatedAt = new Date();
  } else {
    assets.push({ id, lat, lng, updatedAt: new Date() });
  }
  res.send({ message: "Updated" });
});

// API ดึงข้อมูลทั้งหมด
app.get('/assets', (req, res) => {
  res.send(assets);
});

app.listen(3000, () => console.log('Server started'));
