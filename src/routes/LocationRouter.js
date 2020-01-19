var express = require('express')
var router = express.Router()
const LocationController = require('../controller/LocationController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.get('/', LocationController.all)
router.get('/:id', LocationController.byId)



module.exports = router
