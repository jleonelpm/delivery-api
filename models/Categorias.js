const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: String,
    imagen: String,
});

categoriaSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    console.log(object)
    return object;
});

module.exports = mongoose.model("Categorias", categoriaSchema);