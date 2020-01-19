const FiringTempsDbo  = require('./dbo/FiringTempsDbo')

class FiringTemps {
      all() {
      return FiringTempsDbo.query()
    }

    byId(id)
    {
      return FiringTempsDbo.query().findById(id)
    }
}

module.exports = FiringTemps
