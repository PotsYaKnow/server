module.exports = (sequelize, DataTypes) => {

    const Pot = sequelize.define('Pot', {
      name : DataTypes.STRING
    });

    Pot.associate = function (models) {
        Pot.belongsTo(models.User)
        Pot.hasMany(models.PotNote)
        Pot.belongsTo(models.PotStatus)
    }

    return Pot
}
