const { User, Pot, PotNote } = require('../model')

module.exports = {
    async createPot (req, res) {
        try {

            const potParams = req.body
            const userId = req.user.id

            const newNote = PotNote.create(potParams.note)

            const newPot = await Pot.create({
                Name: potParams.name,
                PotNoteId: newNote.id,
                //PotStatusId: potParams.statusId,
                UserId: userId
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
