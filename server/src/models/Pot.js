

module.exports = (sequelize, DataTypes) => {

    const Pot = sequelize.define('Pot', {
        name: DataTypes.STRING,
        notes: DataTypes.TEXT
    })

    Pot.associate = function (models) {
        Pot.belongsTo(models.User)
        Pot.belongsTo(models.PotStatus)
    }

    return Pot
}
