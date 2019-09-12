const { Pot, PotHistory, PotStatus } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')

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


            let allPots = null
            const search = req.query.search
            console.log(search)


            if (search) {
                allPots = await Pot.findAll({
                    limit: 10,
                    order: [
                        ['updatedAt', 'DESC']
                    ],
                    include: [{
                        model: PotStatus,
                        where: {
                            [Op.or]: ['status'].map(key => ({
                                [key]: {
                                    [Op.like]: `%${search}%`
                                }
                            }))
                        }
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
