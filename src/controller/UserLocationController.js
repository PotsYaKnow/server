const Locations  = require('../models/Locations')
const _ = require('lodash')

module.exports = {
    async getAll (req, res) {
        try {
            console.log(Locations)
            const locations = await Locations.query()
            res.send(locations)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all user locations'
            })
        }
    },
}
