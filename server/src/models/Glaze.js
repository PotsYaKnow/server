

module.exports = (sequelize, DataTypes) => {

    const Glaze = sequelize.define('Glaze', {
        name: DataTypes.STRING
    },
    {
        freezeTableName: true
    })


    return Glaze
}
