const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

module.exports = {

  async compare(textPassword, hashedPassword)
  {
      return await bcrypt.compare(textPassword, hashedPassword)
  }


}
