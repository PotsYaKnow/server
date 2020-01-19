const FiringAtmospheresDbo  = require('./dbo/FiringAtmospheresDbo')

class FiringAtmospheres {
      all() {
      return FiringAtmospheresDbo.query()
    }

    byId(id)
    {
      return FiringAtmospheresDbo.query().findById(id)
    }
}

module.exports = FiringAtmospheres
