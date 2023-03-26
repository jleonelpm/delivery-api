const express = require('express')
const cliente = require('../controllers/cliente.controller')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', cliente.test);
router.post('/create', cliente.addCliente);


module.exports = router