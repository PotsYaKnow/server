const ClayBodies  = require('../models/ClayBodiesFactory')

module.exports = {
    async all (req, res) {
        try {
            const clayBodies = await new ClayBodies().all()
            res.send(clayBodies)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all ClayBodies'
            })
        }
    },

   async byId(req, res)
    {
        try {
            const clayBodies = await new ClayBodies().byId(req.params.id)
            res.send(clayBodies)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a ClayBody'
            })
        }
    }
}
