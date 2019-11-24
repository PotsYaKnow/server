const { Slip } = require('../models')

module.exports = {
    async getAll (req, res) {
        try {
            const slip = await Slip.findAll()
            res.send(slip)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while trying to find a slip'
            })
        }
    }
}
