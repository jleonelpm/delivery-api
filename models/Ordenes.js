const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({

    fecha: Date,
    status : String,
    productos: Array, //Array of products
    cliente: { //Se cambio en lugar de direccion a cliente
        nombre:String, //Se agregó este campo
        apellido:String,
        email:String,
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