const { PotHistory } = require('../models')


module.exports = {
    async getPotHistory (req, res) {
        try {

            const potHistory = await PotHistory.findByPk(req.params.potHistoryId)

            res.send(potHistory)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to find all pots'
            })
        }
    },
    async editPotHistory (req, res) {
        try {


            await PotHistory.update(req.body, {
                where: {
                    id: req.params.potHistoryId
                }
            })

            res.send(req.body)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to edit a pot'
            })
        }

    },
}
