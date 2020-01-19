const FiringAtmospheres  = require('../models/FiringAtmospheres')

module.exports = {
    async all (req, res) {
        try {
            const firingAtmospheres = await new FiringAtmospheres().all()
            res.send(firingAtmospheres)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all FiringAtmospheres'
            })
        }
    },

   async byId(req, res)
    {
        try {
            const firingAtmospheres = await new FiringAtmospheres().byId(req.params.id)
            res.send(firingAtmospheres)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a FiringAtmosphere'
            })
        }
    }
}
