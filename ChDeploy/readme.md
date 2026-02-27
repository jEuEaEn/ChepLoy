# Students API — CRUD con JSON (Express)

Backend desarrollado en **Node.js + Express** que implementa un CRUD de estudiantes utilizando un archivo JSON como almacenamiento.

Este proyecto está pensado para aprender:

- Estructura de un backend
- Endpoints REST
- Persistencia sin base de datos
- Deploy en la nube

---

## Tecnologías

- Node.js
- Express
- File System (fs)
- JSON como almacenamiento

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/JoelR19/ChDeploy
cd chdeploy
```

Instalar dependencias:

```bash
npm install
```

---

## ▶ Ejecutar en local

```bash
npm start
```

El servidor corre en:

```
http://localhost:3000
```

(O el puerto definido en variables de entorno)

---

## Variables de entorno

Crear un archivo `.env`:

```
PORT=3000
```

El deploy en la nube asignará su propio puerto automáticamente.

---

## Endpoints

### Obtener estudiantes

```
GET /students
```

---

### Obtener estudiante por id

```
GET /students/:id
```

---

### Crear estudiante

```
POST /students
```

Body:

```json
{
  "name": "Nuevo Estudiante"
}
```

---

### Actualizar estudiante

```
PUT /students/:id
```

---

### Eliminar estudiante

```
DELETE /students/:id
```

---

## Persistencia

Los datos se guardan en un archivo:

```
data/students.json
```

Después de cada operación el archivo se actualiza.

Esto simula el comportamiento de una base de datos.

---

## Limitaciones

- Puede perder datos si el servidor se reinicia
- No maneja concurrencia
- No escala para producción
- No reemplaza una base de datos real

Este enfoque es educativo.

---

## Deploy

El proyecto está preparado para desplegarse en plataformas como:

- Railway
- Render
- Fly.io

Solo requiere:

- Variables de entorno
- Comando de inicio (`npm start`)

---

## Propósito

Este repositorio permite comprender primero el deploy de un backend.

Posteriormente el mismo proyecto puede migrarse a MySQL u otra base de datos para comparar arquitecturas.

---
