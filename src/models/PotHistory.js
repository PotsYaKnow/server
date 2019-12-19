module.exports = (sequelize, DataTypes) => {

    const PotHistory = sequelize.define('PotHistory', {
        name: DataTypes.STRING,
        published: DataTypes.BOOLEAN,
        picture: DataTypes.BLOB,
        slipColor: DataTypes.STRING,
        overglazeColor: DataTypes.STRING,
        underglazeColor: DataTypes.STRING,
        engobeColor: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    PotHistory.associate = function (models) {
        PotHistory.belongsTo(models.ClayBody),
            PotHistory.belongsTo(models.Glaze),
            PotHistory.belongsTo(models.FiringTemp),
            PotHistory.belongsTo(models.FiringAtmosphere),
            PotHistory.belongsTo(models.PotStatus),
            PotHistory.belongsTo(models.Pot)
    }



    return PotHistory
}
