const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// Obtener todos los estudiantes
app.get('/api/estudiantes', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM estudiantes');
  res.json(rows);
});

// Agregar estudiante
app.post('/api/estudiantes', async (req, res) => {
  const { nombre, direccion, ciudad, estado, email, telefono } = req.body;
  await db.query('INSERT INTO estudiantes (nombre, direccion, ciudad, estado, email, telefono) VALUES (?, ?, ?, ?, ?, ?)',
    [nombre, direccion, ciudad, estado, email, telefono]);
  res.sendStatus(201);
});

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
