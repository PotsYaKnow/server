'use strict'

const { Model } = require('objection')

class LocationsDbo extends Model {
    static get tableName() {
        return 'Locations'
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
          return {
              type: 'object',
              required: ['id', 'country'],
              properties: {
                  id: { type: 'number' },
                  country: { type: 'string' }
              }
          }
      }

}

module.exports = LocationsDbo
