const SlipsDbo  = require('./dbo/SlipsDbo')
class Slips {
      all() {
      return SlipsDbo.query()
    }

    byId(id)
    {
      return SlipsDbo.query().findById(id)
    }
}

module.exports = Slips
