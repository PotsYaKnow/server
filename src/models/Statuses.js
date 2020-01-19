const StatusesDbo  = require('./dbo/StatusesDbo')

class Statuses {
      all() {
      return StatusesDbo.query()
    }

    byId(id)
    {
      return StatusesDbo.query().findById(id)
    }
}

module.exports = Statuses
