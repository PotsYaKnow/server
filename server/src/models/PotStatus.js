module.exports = (sequelize, DataTypes) => {

    const PotStatus = sequelize.define('PotStatus', {
      status : DataTypes.STRING
    });

    return PotStatus
}
