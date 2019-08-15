module.exports = (sequelize, DataTypes) => {

    const Pot = sequelize.define('Pot', {
      name : DataTypes.STRING
    });

    Pot.associate = function (models) {
        Pot.belongsTo(models.User)
        Pot.belongsTo(models.PotNote)
        Pot.belongsTo(models.Glaze)
        Pot.belongsTo(models.ClayBody)
        Pot.belongsTo(models.PotStatus)
    }

    return Pot
}
