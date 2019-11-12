const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))


function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }

    return bcrypt.genSalt(SALT_FACTOR)
        .then(salt =>
            bcrypt.hash(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)

        })
}

module.exports = (sequelize, DataTypes) => {


    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        picture: DataTypes.BLOB
    }, {
        freezeTableName: true,
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })


    User.associate = function (models) {
        User.belongsTo(models.Country),
        User.belongsToMany(models.UserGroup, { through: 'UserGroupMember' }),
        User.belongsToMany(models.Pot, {through: 'UserFavPot'})
    }

    User.prototype.comparePassword = function (password) {
        return bcrypt.compare(password, this.password)
    }
    return User
}
