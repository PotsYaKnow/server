
async function addToHistory (pot, options) {

  let existingPot = await models.Pot.findByPk(req.params.potId)

  console.log(existingPot)

  /*models.PotHistory.create({
    PotId: existingPot.id,
    PotStatusId: existingPot.PotStatusId,
    notes: existingPot.notes,
  })*/
}

module.exports = (sequelize, DataTypes) => {

    const Pot = sequelize.define('Pot', {
        name: DataTypes.STRING,
        notes: DataTypes.TEXT
    }, {
        hooks: {
            beforeBulkUpdate: addToHistory
        }
    })

    Pot.associate = function (models) {
        Pot.belongsTo(models.User)
        Pot.belongsTo(models.PotStatus)
    }

    return Pot
}
