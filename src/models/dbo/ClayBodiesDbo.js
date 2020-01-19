'use strict'

const { Model } = require('objection')

class ClayBodiesDbo extends Model {
    static get tableName() {
        return 'ClayBodies'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = ClayBodiesDbo
