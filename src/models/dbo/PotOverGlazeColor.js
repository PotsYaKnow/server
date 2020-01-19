
module.exports = (sequelize, DataTypes) => {

    const PotOverGlazeColor = sequelize.define('PotOverGlazeColor', {
        overglazeColor: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    Pot.associate = function (models) {
        Pot.belongsTo(models.ClayBody),
            Pot.belongsTo(models.Glaze),
            Pot.belongsTo(models.FiringTemp),
            Pot.belongsTo(models.FiringAtmosphere),
            Pot.belongsTo(models.PotStatus),
            Pot.belongsTo(models.User)
            Pot.belongsTo(models.Slip)
    }


    return Pot
}


slipColor: DataTypes.STRING,
underglazeColor: DataTypes.STRING,
overglazeColor: DataTypes.STRING
