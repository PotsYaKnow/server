module.exports = (sequelize, DataTypes) => {

    const Pot = sequelize.define('Pot', {
        name: DataTypes.STRING,
        published: DataTypes.BOOLEAN,
        picture: DataTypes.BLOB,
        notes: DataTypes.STRING,
        slipColor: DataTypes.STRING,
        underglazeColor: DataTypes.STRING,
        overglazeColor: DataTypes.STRING
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
