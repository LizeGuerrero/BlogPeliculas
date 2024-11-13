const mongoose = require("mongoose");

const imagenSchema = new mongoose.Schema({
    ubicacion: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    // Relación para saber a qué película pertenece esta imagen
    peliculaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelicula",
        required: false, // opcional si una imagen no siempre está ligada a una película
    }
});

module.exports = mongoose.model("Imagen", imagenSchema);