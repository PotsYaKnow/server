const { Pot, PotStatus } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')



module.exports = {
    async getAll (req, res) {
        try {


            let allPots = null
            const search = req.query.search
            if (search) {
                allPots = await Pot.findAll({
                    limit: 10,
                    order: [
                        ['updatedAt', 'DESC']
                    ],
                    where: {
                        [Op.or]: ['name'].map(key => ({
                            [key]: {
                                [Op.like]: `%${search}%`
                            }
                        })),
                        UserId: req.query.userId
                    }
                })

            } else {
                allPots = await Pot.findAll({
                    limit: 10,
                    order: [
                        ['updatedAt', 'DESC']
                    ],
                    where: {
                        UserId: req.query.userId
                    }
                })
            }



            res.send(allPots)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to find the users pots'
            })
        }
    }
}
