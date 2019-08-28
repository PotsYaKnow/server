const { User, Pot } = require('../models')

module.exports = {
    async createPot (req, res) {
        try {

            const potParams = req.body
            //const userId = req.user.id

            const newPot = await Pot.create({
                name: potParams.name,
                UserId: potParams.userId,
                PotStatusId: potParams.status,
                notes: potParams.notes
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

            let result = await Pot.findByPk(req.params.potId)

            let pot = renameProp('PotStatusId', 'status', result.toJSON())
            pot = renameProp('UserId', 'userId', pot)

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

            const allPots = await Pot.findAll({ limit: 10 })


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

            let pot = renameProp('status', 'PotStatusId', req.body)

            await Pot.update(pot, {
                where: {
                    id: req.params.potId
                }
            })

            res.send(pot)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to edit a pot'
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
