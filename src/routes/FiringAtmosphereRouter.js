var express = require('express')
var router = express.Router()
const FiringAtmosphereController = require('../controller/FiringAtmosphereController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.get('/', FiringAtmosphereController.all)
router.get('/:id', FiringAtmosphereController.byId)


module.exports = router
