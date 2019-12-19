module.exports = (sequelize, DataTypes) => {

    const PotStatus = sequelize.define('PotStatus', {
      name : DataTypes.STRING
    },
    {
        freezeTableName: true
    });

    return PotStatus
}
