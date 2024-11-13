const mongoose = require("mongoose");

//const Item = mongoose.model("users", new mongoose.Schema({ }));
// Se crea un const para definir el esquema, por si en el futuro hay que cambiarlo o agregarle algo
const peliculaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    duracion: {
        type: Number, // duración en minutos
        required: true,
    },
    sinopsis: {
        type: String,
        required: true,
    },
    director_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Director",
        required: true,
    },
    generos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genero",
    }],
    fecha_lanzamiento: {
        type: Date,
        required: true,
    },
    imagenes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Imagen",
        required: false, // no es obligatorio si una película no tiene imagen
    }],
});

const Pelicula = mongoose.model("Pelicula", peliculaSchema);

module.exports = Pelicula;




