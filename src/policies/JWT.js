const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtClaims (user) {
    return {
        client_id: user.id,
        email: user.email,
        name: user.username
    }
}

module.exports = {

    cookieName: 'authtoken',

    jwtSignUser(user) {
        return jwt.sign(jwtClaims(user), config.authentication.jwtSecret, { expiresIn: "7 days" })
    }

}
