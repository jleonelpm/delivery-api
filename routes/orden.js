const express = require('express')
const orden = require('../controllers/orden.controller')
const authMiddleware = require("../middleware/auth");

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', authMiddleware, orden.findAll);
router.get("/id/:id", authMiddleware, orden.findOne);
router.post('/create', authMiddleware, orden.add);
router.get('/last_inserted', authMiddleware, orden.findLastOrderInserted);


module.exports = router