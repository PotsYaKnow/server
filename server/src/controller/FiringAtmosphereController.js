const { FiringAtmosphere } = require('../models')

module.exports = {
    async getAll (req, res) {
        try {
            const firingAtmosphere = await FiringAtmosphere.findAll()
            res.send(firingAtmosphere)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while trying to find a FiringAtmosphere'
            })
        }
    }
}
