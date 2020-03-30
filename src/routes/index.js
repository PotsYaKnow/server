const LocationRouter = require('./LocationRouter')
const GlazeRouter = require('./GlazeRouter')
const SlipRouter = require('./SlipRouter')
const FiringTempRouter = require('./FiringTempRouter')
const FiringAtmosphereRouter = require('./FiringAtmosphereRouter')
const StatusRouter = require('./StatusRouter')
const ClayBodyRouter = require('./ClayBodyRouter')
const SignUpRouter = require('./SignUpRouter')
const LoginRouter = require('./LoginRouter')
const StudioRouter = require('./StudioRouter')
const AuthenticationController = require('../controller/AuthenticationController')

module.exports = function (app) {

app.get('/isUserLoggedIn', AuthenticationController.isUserLoggedIn)
app.use('/signup', SignUpRouter)
app.use('/login', LoginRouter),
app.use('/locations', LocationRouter)
app.use('/glazes', GlazeRouter)
app.use('/slips', SlipRouter)
app.use('/firingtemps', FiringTempRouter)
app.use('/firingatmospheres', FiringAtmosphereRouter)
app.use('/statuses', StatusRouter)
app.use('/claybodies', ClayBodyRouter)
app.use('/studio', StudioRouter)



}
