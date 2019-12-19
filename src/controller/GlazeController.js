const { Glaze } = require('../models')

module.exports = {
    async getAll (req, res) {
        try {
            const glaze = await Glaze.findAll()
            res.send(glaze)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while trying to find a glaze'
            })
        }
    }
}
