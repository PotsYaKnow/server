var express = require('express')
var router = express.Router()
const GlazeController = require('../controller/GlazeController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.get('/', GlazeController.all)
router.get('/:id', GlazeController.byId)


module.exports = router
