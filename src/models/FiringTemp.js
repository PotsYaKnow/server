

module.exports = (sequelize, DataTypes) => {

    const FiringTemp = sequelize.define('FiringTemp', {
        name: DataTypes.STRING
    },
    {
        freezeTableName: true
    })


    return FiringTemp
}
