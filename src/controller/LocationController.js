const Locations  = require('../models/LocationsFactory')

module.exports = {
    async all (req, res) {
        try {
            const locations = await new Locations().all()
            res.send(locations)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all locations'
            })
        }
    },

    async byId (req, res) {
        try {
            const location = await new Locations().byId(req.params.id)
            res.send(location)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a locations'
            })
        }
    },
}
