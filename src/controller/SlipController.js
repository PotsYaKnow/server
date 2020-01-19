const Slips  = require('../models/Slips')

module.exports = {
    async all (req, res) {
        try {
            const slips = await new Slips().all()
            res.send(slips)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all slips'
            })
        }
    },

   async byId(req, res)
    {
        try {
            const slips = await new Slips().byId(req.params.id)
            res.send(slips)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all slips'
            })
        }
    }
}
