

module.exports = (sequelize, DataTypes) => {

    const Slip = sequelize.define('Slip', {
        name: DataTypes.STRING
    },
    {
        freezeTableName: true
    })


    return Slip
}
