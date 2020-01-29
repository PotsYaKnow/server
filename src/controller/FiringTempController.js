const FiringTemps  = require('../models/FiringTempsFactory')

module.exports = {
    async all (req, res) {
        try {
            const firingTemp = await new FiringTemps().all()
            res.send(firingTemp)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all FiringTemps'
            })
        }
    },

   async byId(req, res)
    {
        try {
            const firingTemp = await new FiringTemps().byId(req.params.id)
            res.send(firingTemp)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a FiringTemp'
            })
        }
    }
}
