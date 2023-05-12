const express = require('express')
const productos = require('../controllers/productos.controller')
const authMiddleware = require("../middleware/auth");

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next() //Invoque the any next funcion 
})

router.get('/', authMiddleware, productos.findAll);
router.get("/id/:id", authMiddleware, productos.findOne);
router.get("/desc/:text", authMiddleware, productos.findByText);
router.get('/cat/:categoria', authMiddleware, productos.findByCategory);
router.get('/last_inserted', authMiddleware, productos.findLastProductInserted);


module.exports = router