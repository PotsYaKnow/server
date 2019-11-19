const { ClayBody } = require('../models')

module.exports = {
    async getAll (req, res) {
        try {
            const clayBodies = await ClayBody.findAll()
            res.send(clayBodies)
        } catch (err) {

            res.status(500).send({
                error: 'An error occurred while trying to find clay bodies'
            })
        }
    },

}
