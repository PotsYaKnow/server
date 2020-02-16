'use strict'

const { Model } = require('objection')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

class UsersDbo extends Model {
    static get tableName() {
        return 'Users'
    }

    async $beforeInsert (queryContext) {
        await super.$beforeInsert(queryContext);
        await hashPassword(this)
    }

    static get idColumn() {
        return 'id';
    }

    get toJson() {
        return {
            "email": this.email,
            "username": this.username,
            "password": this.password,
            "locationId": this.locationId
        }
    }

}

function hashPassword (user, options) {
    const SALT_FACTOR = 8
    return bcrypt.genSalt(SALT_FACTOR)
        .then(salt =>
            bcrypt.hash(user.password, salt, null))
        .then(hash =>
            user.password = hash)
}

module.exports = UsersDbo
