const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({

    fecha: Date,
    status : String,
    productos: Array, //Array of products
    direccion: {
        calle:String,
        numero: String,
        telefono: String,
        latitud: Number,
        longitu: Number
    },  
    cantidad_productos: Number,
    importe_total: Number,

});

ordenSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model ("Ordenes", ordenSchema);