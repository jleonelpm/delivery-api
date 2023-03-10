const express = require('express')
const productos = require('../controllers/productos.controller')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next() //Invoque the any next funcion 
})

router.get('/', productos.findAll);
router.get("/:id", productos.findOne);
router.get('/cat/:categoria', productos.findByCategory);

module.exports = router