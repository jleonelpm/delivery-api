const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: String, 
    imagen: String,
});

module.exports = mongoose.model ("Categorias", categoriaSchema);