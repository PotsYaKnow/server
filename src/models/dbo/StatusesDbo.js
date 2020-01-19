'use strict'

const { Model } = require('objection')

class StatusesDbo extends Model {
    static get tableName() {
        return 'Statuses'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = StatusesDbo
