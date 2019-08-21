const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

const PotController = require('./controller/PotController')



module.exports = function (app) {
    app.post('/signup', AuthenticationPolicy.signup, AuthenticationController.signup)
    app.post('/login', AuthenticationController.login)


    app.post('/pot',  PotController.createPot)
    app.get('/pot',  PotController.getAllPots)
}
