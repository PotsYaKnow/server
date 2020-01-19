const UserLocationController = require('../controller/UserLocationController')


module.exports = function (app) {

    app.get('/userLocation', UserLocationController.getAll)




}
