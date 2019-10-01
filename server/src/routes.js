const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

const PotController = require('./controller/PotController')
const PotStatusController = require('./controller/PotStatusController')
const PotHistoryController = require('./controller/PotHistoryController')



module.exports = function (app) {
    app.post('/signup', AuthenticationPolicy.signup, AuthenticationController.signup)
    app.post('/login', AuthenticationController.login)



    app.post('/pot', PotController.createPot)
    app.get('/pot', PotController.getAllPots)
    app.get('/pot/:potId', PotController.getPot)
    app.put('/pot/:potId', PotController.editPot)
    app.delete('/pot/:potId', PotController.deletePot)
    app.get('/pot/history/:potId', PotController.getAllPotsHistory)

    app.get('/potstatus', PotStatusController.getAllPotStatuses)


    app.get('/history/:potHistoryId', PotHistoryController.getPotHistory)
    app.put('/history/:potHistoryId', PotHistoryController.editPotHistory)
    app.delete('/history/:potHistoryId', PotHistoryController.deletePotHistory)



}
