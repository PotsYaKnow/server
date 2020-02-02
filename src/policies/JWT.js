const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {

   jwtSignUser (user) {
      return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: "7 days" })
  }

}
