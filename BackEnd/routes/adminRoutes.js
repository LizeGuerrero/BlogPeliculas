const express = require('express');
const router = express.Router();

// Importar los controladores
const {
  getPeliculas,
  getPeliculaById,
  addPelicula,
  updatePelicula,
  deletePelicula
} = require('../controllers/admin/PeliculasController');

const {
  getGeneros,
  getGeneroById,
  addGenero,
  updateGenero,
  deleteGenero
} = require('../controllers/admin/GenerosController');

const {
  getDirectores,
  getDirectorById,
  addDirector,
  updateDirector,
  deleteDirector
} = require('../controllers/admin/DirectoresController');



// Rutas para películas
router.get('/peliculas', getPeliculas);             // Obtener todas las películas
router.get('/peliculas/:id', getPeliculaById);      // Obtener una película por ID
router.post('/peliculas', addPelicula);             // Agregar una nueva película
router.put('/peliculas/:id', updatePelicula);       // Editar una película existente
router.delete('/peliculas/:id', deletePelicula);    // Eliminar una película

// Rutas para géneros
router.get('/generos', getGeneros);                 // Obtener todos los géneros
router.get('/generos/:id', getGeneroById);          // Obtener un género por ID
router.post('/generos', addGenero);                 // Agregar un nuevo género
router.put('/generos/:id', updateGenero);           // Editar un género existente
router.delete('/generos/:id', deleteGenero);        // Eliminar un género

// Rutas para directores
router.get('/directores', getDirectores);           // Obtener todos los directores
router.get('/directores/:id', getDirectorById);     // Obtener un director por ID
router.post('/directores', addDirector);            // Agregar un nuevo director
router.put('/directores/:id', updateDirector);      // Editar un director existente
router.delete('/directores/:id', deleteDirector);   // Eliminar un director


module.exports = router;