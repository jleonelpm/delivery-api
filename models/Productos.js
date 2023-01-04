const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String, // String is shorthand for {type: String}
    precio: Number,
    descripcion: String,
    proveedor: {
        nombre: String,
        direccion: {
            calle: String,
            latitud: Number,
            longitud: Number
        }
    },
    categorias: Array,
});

module.exports = mongoose.model ("Productos", productoSchema);
