const bodyParser = require('body-parser');
const { db } = require("./config/db.js") 
const express = require('express');
const cors = require('cors');
const productos = require("./routes/productos")
const categorias = require("./routes/categorias")

const app = express();

//Realizados la llamada a jwt
//const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//Middleware para realizar solicitudes API
app.use(bodyParser.json());

app.use('/api/productos', productos)
app.use('/api/categorias', categorias)

// set port, listen for requests
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

