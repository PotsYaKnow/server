const ClayBodiesDbo  = require('./dbo/ClayBodiesDbo')

class ClayBodies {
      all() {
      return ClayBodiesDbo.query()
    }

    byId(id)
    {
      return ClayBodiesDbo.query().findById(id)
    }
}

module.exports = ClayBodies
