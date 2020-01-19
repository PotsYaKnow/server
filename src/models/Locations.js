'use strict'

const { Model } = require('objection')

class Locations extends Model {
    static get tableName() {
        return 'Locations'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = Locations
