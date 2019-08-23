const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

const PotController = require('./controller/PotController')
const PotStatusController = require('./controller/PotStatusController')




module.exports = function (app) {
    app.post('/signup', AuthenticationPolicy.signup, AuthenticationController.signup)
    app.post('/login', AuthenticationController.login)


    app.post('/pot', isAuthenticated, PotController.createPot)
    app.get('/pot', PotController.getAllPots)

    app.get('/potstatus', PotStatusController.getAllPotStatuses)
}
