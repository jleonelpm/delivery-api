const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
        nombre:String,
        apellido: String,
        email:String,
        calle:String,
        numero: String,
        telefono: String,
        latitud: Number,
        longitu: Number
});

clienteSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model ("Cliente", clienteSchema);