'use strict'

const { Model } = require('objection')

class GlazesDbo extends Model {
    static get tableName() {
        return 'Glazes'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = GlazesDbo
