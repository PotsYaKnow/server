var express = require('express')
var router = express.Router()
const SignUpController = require('../controller/SignUpController')
const Policy = require('../policies/SignupPolicy')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.post('/', Policy.signupValidation, SignUpController.signup)


module.exports = router
