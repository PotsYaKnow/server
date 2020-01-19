var express = require('express')
var router = express.Router()
const FiringTempController = require('../controller/FiringTempController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.get('/', FiringTempController.all)
router.get('/:id', FiringTempController.byId)


module.exports = router
