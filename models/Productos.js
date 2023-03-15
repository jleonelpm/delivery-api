const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    codigo: String,
    nombre: String, // String is shorthand for {type: String}
    descripcion: String,
    precio_costo : Number,    
    precio_mayoreo : Number,
    precio: Number, /* Precio de Venta */
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