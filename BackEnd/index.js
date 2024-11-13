// Importar las dependencias necesarias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
 // Cargar las variables de entorno

// Importar las rutas de administración
const adminRoutes = require('./routes/adminRoutes');

// Configurar el servidor Express
const app = express();

// Middlewares
app.use(express.json()); // Analizar las solicitudes JSON
app.use(cors());         // Habilitar CORS para solicitudes de otros dominios

// Obtener la URI de MongoDB desde las variables del entorno
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Conectado a la base de datos");
})
.catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});


// Rutas
app.use('/admin', adminRoutes); // Prefijo para las rutas de administración

// Configurar el puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});