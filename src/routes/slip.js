var express = require('express')
var router = express.Router()
const SlipController = require('../controller/SlipController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', SlipController.getAll)


module.exports = router
