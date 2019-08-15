module.exports = (sequelize, DataTypes) => {

    const ClayBody = sequelize.define('ClayBody', {
      name : DataTypes.STRING
    });

    return ClayBody
}
