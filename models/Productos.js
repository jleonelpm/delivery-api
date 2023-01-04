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

productoSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model ("Productos", productoSchema);