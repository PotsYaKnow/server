

module.exports = (sequelize, DataTypes) => {

    const FiringAtmosphere = sequelize.define('FiringAtmosphere', {
        name: DataTypes.STRING
    },
    {
        freezeTableName: true
    })


    return FiringAtmosphere
}
