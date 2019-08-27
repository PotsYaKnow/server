module.exports = (sequelize, DataTypes) => {

    const PotHistory = sequelize.define('PotHistory', {
      notes: DataTypes.TEXT
    });

    PotHistory.associate = function (models) {
        PotHistory.belongsTo(models.Pot)
        PotHistory.belongsTo(models.PotStatus)
    }

    return PotHistory
}
