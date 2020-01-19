module.exports = (sequelize, DataTypes) => {

    const PotNotes = sequelize.define('PotNotes', {
        note: DataTypes.STRING
    },
    {
        freezeTableName: true
    })

    PotNotes.associate = function (models) {
      PotNotes.hasOne(models.Pot)
    }


    return PotNotes
}
