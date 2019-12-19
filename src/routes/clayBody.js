var express = require('express')
var router = express.Router()
const ClayBodyController = require('../controller/ClayBodyController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', ClayBodyController.getAll)


module.exports = router
