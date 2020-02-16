const LocationRouter = require('./LocationRouter')
const GlazeRouter = require('./GlazeRouter')
const SlipRouter = require('./SlipRouter')
const FiringTempRouter = require('./FiringTempRouter')
const FiringAtmosphereRouter = require('./FiringAtmosphereRouter')
const StatusRouter = require('./StatusRouter')
const ClayBodyRouter = require('./ClayBodyRouter')
const SignUpRouter = require('./SignUpRouter')
const LoginRouter = require('./LoginRouter')

module.exports = function (app) {

  app.use((req, res, next) => {
      res.append('Access-Control-Allow-Credentials', true);
      res.append('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE');
      res.append('Access-Control-Allow-Headers', ['Content-Type', 'X-Requested-With', 'origin']);
      next();
  });

app.use('/signup', SignUpRouter)
app.use('/login', LoginRouter)
app.use('/locations', LocationRouter)
app.use('/glazes', GlazeRouter)
app.use('/slips', SlipRouter)
app.use('/firingtemps', FiringTempRouter)
app.use('/firingatmospheres', FiringAtmosphereRouter)
app.use('/statuses', StatusRouter)
app.use('/claybodies', ClayBodyRouter)



}
