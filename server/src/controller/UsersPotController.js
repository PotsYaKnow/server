const {
    Pot,
    PotStatus,
    ClayBody,
    Glaze,
    FiringTemp,
    FiringAtmosphere,
    Slip
} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const _ = require('lodash')



module.exports = {
    async getAll (req, res) {
        try {

            let modelsToInclude = [{
                    model: PotStatus,
                    attributes: ["name"]
                },
                {
                    model: ClayBody,
                    attributes: ["name"]
                },
                {
                    model: Glaze,
                    attributes: ["name"]
                },
                {
                    model: FiringAtmosphere,
                    attributes: ["name"]
                },
                {
                    model: FiringTemp,
                    attributes: ["name"]
                },
                {
                    model: Slip,
                    attributes: ["name"]
                },
            ]


            let potSelectionFields = ["id",
                "name",
                "published",
                "picture",
                "notes",
                "slipColor",
                "underglazeColor",
                "overglazeColor",
                "updatedAt"
            ]
            let allPots = null
            const search = req.query.search
            if (search) {
                allPots = await Pot.findAll({
                    limit: 10,
                    attributes: potSelectionFields,
                    order: [
                        ['updatedAt', 'DESC']
                    ],
                    include: modelsToInclude,
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
                    attributes: potSelectionFields,
                    order: [
                        ['updatedAt', 'DESC']
                    ],
                    include: modelsToInclude,
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
