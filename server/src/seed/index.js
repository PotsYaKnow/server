const {
    sequelize,
    PotStatus,
    Country,
    ClayBody,
    FiringTemp,
    FiringAtmosphere,
    Glaze
} = require('../models')

const Promise = require('bluebird')
const potStatuses = require('./potStatuses.json')
const clay = require('./clayBodies.json')
const countries = require('./countries.json')
const temps = require('./firingTemps.json')
const atmosphere = require('./firingAtmosphere.json')
const glazes = require('./glazes.json')



sequelize.sync({ force: false })
    .then(async function () {

        await Promise.all(
            potStatuses.map(potStatus => { PotStatus.create(potStatus) }),
            clay.map(clay => { ClayBody.create(clay) }),
            countries.map(country => { Country.create(country) }),
            temps.map(temp => { FiringTemp.create(temp) }),
            atmosphere.map(atmosphere => { FiringAtmosphere.create(atmosphere) }),
            glazes.map(glaze => { Glaze.create(glaze) }),
        )
    })
