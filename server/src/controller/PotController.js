const { User, Pot, PotNote } = require('../models')

module.exports = {
    async createPot (req, res) {
        try {

            const potParams = req.body
            //const userId = req.user.id

            const newPot = await Pot.create({
                name: potParams.name,
                UserId: potParams.userId
            })


            const newNote = await PotNote.create(
                {
                    note: potParams.notes,
                    potId: newPot.id
                })

            res.send(newPot)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to create a pot'
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
                error: 'An error occurred while trying to create a pot'
            })
        }
    }
}
