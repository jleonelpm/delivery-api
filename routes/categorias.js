const express = require('express')
const categorias = require('../controllers/categorias.controller')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', categorias.findAll);
router.post('/create', categorias.addCat);


module.exports = router