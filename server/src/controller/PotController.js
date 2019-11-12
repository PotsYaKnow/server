const { Pot, PotHistory, PotStatus } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')

module.exports = {
    async createPot (req, res) {
        try {

            const newPot = await Pot.create(req.body)

            const potHistory = await PotHistory.create({
                PotId: newPot.id,
                PotStatusId: newPot.PotStatusId,
                notes: newPot.notes,
                name: newPot.name
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


            let allPots = null
            const search = req.query.search

            if (search) {
                allPots = await Pot.findAll({
                    limit: 10,
                    order: [
                        ['updatedAt', 'DESC']
                    ],
                    include: [{
                        model: PotStatus,
                    }],
                    where: {
                        [Op.or]: ['name'].map(key => ({
                            [key]: {
                                [Op.like]: `%${search}%`
                            }
                        }))
                    }
                })

            } else {
                allPots = await Pot.findAll({
                    limit: 10,
                    order: [
                        ['updatedAt', 'DESC']
                    ],
                    include: [{
                        model: PotStatus
                    }]
                })
            }

            allPots = allPots.map(pot => pot.toJSON())
                .map(pot => _.extend({
                        potId: pot.id,
                        name: pot.name,
                        potUpdated: pot.updatedAt,
                        potCreated: pot.createdAt
                    },
                    pot.PotStatus))

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

            let updatedPot = await Pot.findByPk(req.params.potId)

            const potHistory = await PotHistory.create({
                PotId: updatedPot.id,
                PotStatusId: updatedPot.PotStatusId,
                notes: updatedPot.notes,
                name: updatedPot.name
            })


            res.send(potHistory)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to edit a pot'
            })
        }

    },
    async getAllPotsHistory (req, res) {
        try {

            let allPotsHistory = await PotHistory.findAll({
                order: [
                    ['updatedAt', 'DESC']
                ],
                include: [{
                    model: PotStatus,
                }],
                where: {
                    PotId: req.params.potId
                }
            })


            allPotsHistory = allPotsHistory.map(potHistory => potHistory.toJSON())
                .map(potHistory => _.extend({
                        potHistoryId: potHistory.id,
                        potId: potHistory.PotId,
                        name: potHistory.name,
                        potUpdated: potHistory.updatedAt,
                        potCreated: potHistory.createdAt
                    },
                    potHistory.PotStatus))

            res.send(allPotsHistory)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to find all pots'
            })
        }
    },
    async deletePot (req, res) {
        try {

            await PotHistory.destroy({
                where: {
                    PotId: req.params.potId
                }
            })

            let deletedPot = await Pot.findByPk(req.params.potId)
            deletedPot.destroy()

            res.send(deletedPot)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to delete a pot'
            })
        }
    }
}
