var express = require('express')
var router = express.Router()
const UsersPotController = require('../controller/UsersPotController')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', UsersPotController.getAll)


module.exports = router