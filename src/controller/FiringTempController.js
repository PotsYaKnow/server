const { FiringTemp } = require('../models')

module.exports = {
    async getAll (req, res) {
        try {
            const firingTemp = await FiringTemp.findAll()
            res.send(firingTemp)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while trying to find a Firing Temperature'
            })
        }
    }
}
