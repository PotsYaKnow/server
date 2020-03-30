var express = require('express')
var router = express.Router()
const AuthenticationController = require('../controller/AuthenticationController')
const StudioController = require('../controller/StudioController')
const MultiPartRequestParser = require('../utils/MultiPartRequestParser')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/:id', AuthenticationController.verifyCookie, StudioController.get)
router.get('/', AuthenticationController.verifyCookie, StudioController.all)
router.post('/', AuthenticationController.verifyCookie, MultiPartRequestParser.parse, StudioController.create)
router.put('/:id', AuthenticationController.verifyCookie, StudioController.edit)
router.delete('/:id', AuthenticationController.verifyCookie, StudioController.delete)


module.exports = router
