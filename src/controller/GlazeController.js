const Glazes  = require('../models/Glazes')

module.exports = {
    async all (req, res) {
        try {
            const glazes = await new Glazes().all()
            res.send(glazes)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching all glazes'
            })
        }
    },

   async byId(req, res)
    {
        try {
            const glazes = await new Glazes().byId(req.params.id)
            res.send(glazes)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a glaze'
            })
        }
    }
}
