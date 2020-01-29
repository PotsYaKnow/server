const Statuses  = require('../models/StatusesFactory')

module.exports = {
    async all (req, res) {
        try {
            const statuses = await new Statuses().all()
            res.send(statuses)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all Statuses'
            })
        }
    },

   async byId(req, res)
    {
        try {
            const statuses = await new Statuses().byId(req.params.id)
            res.send(statuses)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a Statuses'
            })
        }
    }
}
