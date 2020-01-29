'use strict'

const { Model } = require('objection')

class UsersDbo extends Model {
    static get tableName() {
        return 'Users'
    }

    static get idColumn() {
        return 'id';
    }

    get toJson()
    {
      return {
        "email": this.email,
        "username": this.username,
        "password": this.password
      }
    }

}

module.exports = UsersDbo
