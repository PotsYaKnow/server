

module.exports = (sequelize, DataTypes) => {

    const Pot = sequelize.define('Pot', {
        name: DataTypes.STRING,
        published: DataTypes.BOOLEAN,
        picture: DataTypes.BLOB,
        slipColor: DataTypes.STRING,
        overglazeColor: DataTypes.STRING,
        underglazeColor: DataTypes.STRING,
        engobeColor: DataTypes.STRING,
    },
    {
        freezeTableName: true
    })

    Pot.associate = function (models) {
        Pot.belongsTo(models.ClayBody),
        Pot.belongsTo(models.Glaze),
        Pot.belongsTo(models.FiringTemp),
        Pot.belongsTo(models.FiringAtmosphere),
        Pot.belongsTo(models.PotStatus),
        Pot.belongsTo(models.User)
    }


    return Pot
}
