const { User, Pot, PotHistory } = require('../models')

module.exports = {
    async createPot (req, res) {
        try {

            const potParams = req.body
            //const userId = req.user.id

            const newPot = await Pot.create(req.body)

            const potHistory = await PotHistory.create({
                PotId: newPot.id,
                PotStatusId: newPot.PotStatusId,
                notes: newPot.notes,
            })

            res.send(newPot)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to create a pot'
            })
        }
    },
    async getPot (req, res) {
        try {

            let pot = await Pot.findByPk(req.params.potId)

            res.send(pot)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to find a pot'
            })
        }

    },
    async getAllPots (req, res) {
        try {

            const allPots = await Pot.findAll({ limit: 20 })


            res.send(allPots)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to find all pots'
            })
        }
    },

    async editPot (req, res) {
        try {


            await Pot.update(req.body, {
                where: {
                    id: req.params.potId
                }
            })

            await PotHistory.create({
                PotId: req.params.potId,
                PotStatusId: req.body.PotStatusId,
                notes: req.body.notes,
            })

            res.send(req.body)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to edit a pot'
            })
        }

    },
    async getAllPotsHistory (req, res) {
        try {

            const allPotsHistory = await PotHistory.findAll({
                where: {
                    PotId: req.params.potId
                }
            })

            res.send(allPotsHistory)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to find all pots'
            })
        }
    }
}

function renameProp (oldProp,
    newProp, {
        [oldProp]: old,
        ...others
    }) {
    return {
        [newProp]: old,
        ...others
    }
}
