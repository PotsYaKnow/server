'use strict'

const { Model } = require('objection')

class LocationsDbo extends Model {
    static get tableName() {
        return 'Locations'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = LocationsDbo
