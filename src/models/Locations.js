const LocationsDbo  = require('./dbo/LocationsDbo')
class Locations {
      all() {
      return LocationsDbo.query()
    }

    byId(id)
    {
      return LocationsDbo.query().findById(id)
    }
}

module.exports = Locations
