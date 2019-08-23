const { PotStatus } = require('../models')

module.exports = {
    async getAllPotStatuses (req, res) {
        try {

            const allPotStatuses = await PotStatus.findAll()
            res.send(allPotStatuses)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to create a pot'
            })
        }
    }
}
