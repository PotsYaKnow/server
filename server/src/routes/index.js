const AuthenticationController = require('../controller/AuthenticationController')
const AuthenticationPolicy = require('../policies/AuthenticationPolicy')
const isAuthenticated = require('../policies/isAuthenticated')

const PotController = require('../controller/PotController')
const PotStatusController = require('../controller/PotStatusController')
const PotHistoryController = require('../controller/PotHistoryController')

const UserLocationController = require('../controller/UserLocationController')

const glaze = require('./glaze')
const potStatus = require('./potStatus')
const firingTemp = require('./firingTemp')
const firingAtmosphere = require('./firingAtmosphere')
const clayBody = require('./clayBody')
const slip = require('./slip')
const usersPot = require('./usersPot')

module.exports = function (app) {


    app.post('/signup', AuthenticationPolicy.signup, AuthenticationController.signup)
    app.post('/login', AuthenticationController.login)
    app.use('/pot/user', usersPot)


    app.post('/pot', PotController.createPot)
    app.get('/pot', PotController.getAllPots)
    app.get('/pot/:potId', PotController.getPot)
    app.put('/pot/:potId', PotController.editPot)
    app.delete('/pot/:potId', PotController.deletePot)
    app.get('/pot/history/:potId', PotController.getAllPotsHistory)




    app.get('/history/:potHistoryId', PotHistoryController.getPotHistory)
    app.put('/history/:potHistoryId', PotHistoryController.editPotHistory)
    app.delete('/history/:potHistoryId', PotHistoryController.deletePotHistory)


    app.get('/userLocation', UserLocationController.getAll)

    app.use('/potStatus', potStatus)
    app.use('/glaze', glaze)
    app.use('/slip', slip)
    app.use('/firingTemp', firingTemp)
    app.use('/firingAtmosphere', firingAtmosphere)
    app.use('/clayBody', clayBody)





}
