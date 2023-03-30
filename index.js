const bodyParser = require('body-parser');
const startMongo  = require("./config/db.js") 
const express = require('express');
const cors = require('cors');
const productos = require("./routes/productos")
const categorias = require("./routes/categorias")
const ordenes = require("./routes/orden")
const clientes = require("./routes/cliente")

const app = express();
startMongo();

//Realizados la llamada a jwt
//const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//Middleware para realizar solicitudes API
app.use(bodyParser.json());

app.use('/api/productos', productos)
app.use('/api/categorias', categorias)
app.use('/api/ordenes', ordenes)
app.use('/api/clientes', clientes)

// set port, listen for requests
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

