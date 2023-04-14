const express = require('express')
const cliente = require('../controllers/cliente.controller')
const authMiddleware = require("../middleware/auth");

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', authMiddleware, cliente.findAll);
router.post('/create', authMiddleware, cliente.addCliente);

module.exports = router