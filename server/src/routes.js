const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')



module.exports = function (app) {
    app.post('/signup', AuthenticationPolicy.signup, AuthenticationController.signup)
    app.post('/login', AuthenticationController.login)
}
