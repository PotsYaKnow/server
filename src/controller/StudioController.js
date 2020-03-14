const Studios = require('../models/UserStudiosFactory')
module.exports = {
    async all (req, res) {
        try {

            console.log('asdf')
            const studios = await new Studios().byUserId(req.user.id)
            res.send(studios)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while trying to fetching all Studios'
            })
        }
    },
    async get (req, res) {
        try {

            const studio = await new Studios().byId(req.params.id)
            res.send(studio)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a Studio'
            })
        }
    },
    async create (req, res) {
        try {
            const studio = await new Studios().create(req.user.id, req.body.name)
            res.send(studio)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while create a studio'
            })
        }
    },
    async edit (req, res) {
        try {
            const studio = await new Studios().edit(req.params.id, req.body.name)
            res.send(studio)
        } catch (err) {

            res.status(500).send({
                error: 'An error occurred while editing a studio'
            })
        }
    },
    async delete (req, res) {
        try {
            const numDeleted = await new Studios().delete(req.params.id)
            res.status(200).send({'deletedCount':numDeleted})

        } catch (err) {
console.log(err)
            res.status(500).send({
                error: 'An error occurred while deleting a studio'
            })
        }
    }
}
