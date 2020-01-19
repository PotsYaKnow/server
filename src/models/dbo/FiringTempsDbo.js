'use strict'

const { Model } = require('objection')

class FiringTempsDbo extends Model {
    static get tableName() {
        return 'FiringTemps'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = FiringTempsDbo
