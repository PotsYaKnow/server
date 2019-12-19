const { PotStatus } = require('../models')

module.exports = {
    async getAll (req, res) {
        try {
            const allPotStatuses = await PotStatus.findAll()
            res.send(allPotStatuses)
        } catch (err) {

            res.status(500).send({
                error: 'An error occurred while trying to find pot statuses'
            })
        }
    },

}
