const GlazesDbo  = require('./dbo/GlazesDbo')
class Glazes {
      all() {
      return GlazesDbo.query()
    }

    byId(id)
    {
      return GlazesDbo.query().findById(id)
    }
}

module.exports = Glazes
