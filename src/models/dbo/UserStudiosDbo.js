'use strict'

const { Model } = require('objection')

class UserStudiosDbo extends Model {
    static get tableName() {
        return 'UserStudios'
    }

    static get idColumn() {
        return 'id';
    }



}

module.exports = UserStudiosDbo
