const LocationRouter = require('./LocationRouter')
const GlazeRouter = require('./GlazeRouter')
const SlipRouter = require('./SlipRouter')
const FiringTempRouter = require('./FiringTempRouter')
const FiringAtmosphereRouter = require('./FiringAtmosphereRouter')
const StatusRouter = require('./StatusRouter')
const ClayBodyRouter = require('./ClayBodyRouter')
const SignUpRouter = require('./SignUpRouter')

module.exports = function (app) {

app.use('/signup', SignUpRouter)
app.use('/locations', LocationRouter)
app.use('/glazes', GlazeRouter)
app.use('/slips', SlipRouter)
app.use('/firingtemps', FiringTempRouter)
app.use('/firingatmospheres', FiringAtmosphereRouter)
app.use('/statuses', StatusRouter)
app.use('/claybodies', ClayBodyRouter)



}
