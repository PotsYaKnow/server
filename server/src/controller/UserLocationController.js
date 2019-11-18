const { UserLocation } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')

module.exports = {
    async getAll (req, res) {
        try {
            const locations = await UserLocation.findAll()
            res.send(locations)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all user locations'
            })
        }
    },
}
