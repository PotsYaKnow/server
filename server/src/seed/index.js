const {
    sequelize,
    PotStatus,
    UserLocation,
    ClayBody,
    FiringTemp,
    FiringAtmosphere,
    Glaze
} = require('../models')

const Promise = require('bluebird')
const potStatuses = require('./potStatuses.json')
const clay = require('./clayBodies.json')
const locations = require('./userLocations.json')
const temps = require('./firingTemps.json')
const atmosphere = require('./firingAtmosphere.json')
const glazes = require('./glazes.json')



sequelize.sync({ force: false })
    .then(async function () {

        await Promise.all(
            potStatuses.map(potStatus => { PotStatus.create(potStatus) }),
            clay.map(clay => { ClayBody.create(clay) }),
            locations.map(location => { UserLocation.create(location) }),
            temps.map(temp => { FiringTemp.create(temp) }),
            atmosphere.map(atmosphere => { FiringAtmosphere.create(atmosphere) }),
            glazes.map(glaze => { Glaze.create(glaze) }),
        )
    })
