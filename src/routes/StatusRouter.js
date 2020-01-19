var express = require('express')
var router = express.Router()
const StatusController = require('../controller/StatusController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.get('/', StatusController.all)
router.get('/:id', StatusController.byId)


module.exports = router
