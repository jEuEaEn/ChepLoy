// importacion de archios
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = './data/students.json';

app.use(cors());
app.use(express.json());

const readData = () => {
  const data = fs.readFileSync(DB_PATH);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

//Prueba de pagina
app.get('/', (req, res) => {
  res.json({ message: 'API estudiantes funcionando 🚀' });
});

//onseguir lista
app.get('/students', (req, res) => {
  res.json(readData());
});

//crear estudiantes
app.post('/students', (req, res) => {
  const students = readData();

  const newStudent = {
    id: Date.now(),
    name: req.body.name
  };

  students.push(newStudent);
  writeData(students);

  res.status(201).json(newStudent);
});

//Actualizar estudiante
app.put('/students/:id', (req, res) => {
  const students = readData();

  const updated = students.map((s) => (s.id == req.params.id ? { ...s, name: req.body.name } : s));

  writeData(updated);

  res.json({ message: 'actualizado' });
});


//Eliminar Datos
app.delete('/students/:id', (req, res) => {
  const students = readData();

  const filtered = students.filter((s) => s.id != req.params.id);

  writeData(filtered);

  res.json({ message: 'eliminado' });
});

app.listen(PORT, () => console.log('server running', PORT));
