'use strict'

const { Model } = require('objection')

class FiringAtmoshpheresDbo extends Model {
    static get tableName() {
        return 'FiringAtmospheres'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = FiringAtmoshpheresDbo
