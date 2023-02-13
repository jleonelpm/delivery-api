const express = require('express')
const orden = require('../controllers/orden.controller')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', orden.test);
router.post('/create', orden.add);


module.exports = router