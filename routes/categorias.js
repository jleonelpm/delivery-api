const express = require('express')
const categorias = require('../controllers/categorias.controller')
const authMiddleware = require("../middleware/auth");

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', authMiddleware, categorias.findAll);
router.post('/create', authMiddleware, categorias.addCat);
router.get('/test',authMiddleware, categorias.status);
// Getting all subscribers




module.exports = router