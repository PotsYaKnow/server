

module.exports = (sequelize, DataTypes) => {

    const UserLocation = sequelize.define('UserLocation', {
        name: DataTypes.STRING
    },
    {
        freezeTableName: true
    })

    return UserLocation
}
