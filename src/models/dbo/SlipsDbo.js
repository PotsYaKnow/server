'use strict'

const { Model } = require('objection')

class SlipsDbo extends Model {
    static get tableName() {
        return 'Slips'
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = SlipsDbo
