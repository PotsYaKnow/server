

module.exports = (sequelize, DataTypes) => {

    const UserGroup = sequelize.define('UserGroup', {
        name: DataTypes.STRING,

    },
    {
        freezeTableName: true
    })

    UserGroup.associate = function (models) {
        UserGroup.belongsToMany(models.User, {through: 'UserGroupMember'})
    }
    return UserGroup
}
