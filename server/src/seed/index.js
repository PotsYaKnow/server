const { sequelize, PotStatus} = require('../models')

const Promise = require('bluebird')
const potStatuses = require('./potStatuses.json')



sequelize.sync({ force: false })
    .then(async function () {

        await Promise.all(
            potStatuses.map(potStatus => { PotStatus.create(potStatus) }))
    })
