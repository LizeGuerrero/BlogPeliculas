const Pelicula = require('../../models/Pelicula');

// Obtener todas las películas
const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener películas' });
  }
};

// Obtener una película por ID
const getPeliculaById = async (req, res) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id);
    if (!pelicula) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(pelicula);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la película' });
  }
};

// Agregar una nueva película
const addPelicula = async (req, res) => {
  try {
    const newPelicula = new Pelicula(req.body);
    await newPelicula.save();
    res.status(201).json(newPelicula);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar película' });
  }
};

// Editar una película existente
const updatePelicula = async (req, res) => {
  try {
    const updatedPelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPelicula) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(updatedPelicula);
  } catch (error) {
    res.status(500).json({ error: 'Error al editar película' });
  }
};

// Eliminar una película
const deletePelicula = async (req, res) => {
  try {
    const deletedPelicula = await Pelicula.findByIdAndDelete(req.params.id);
    if (!deletedPelicula) return res.status(404).json({ error: 'Película no encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar película' });
  }
};

module.exports = { getPeliculas, getPeliculaById, addPelicula, updatePelicula, deletePelicula };

