const UsersFactory = require('../models/UsersFactory')
const SecureCookieOptions = require('../policies/SecureCookieOptions')
const JWT = require('../policies/JWT')


module.exports = {

    async login (req, res) {
        try {

            const usersFactory = new UsersFactory();

            const { username, password } = req.body

            const user = await usersFactory.byUserName(username)

            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = await usersFactory.comparePassword(password, user.password)

            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const token = JWT.jwtSignUser(user)

            res.cookie(JWT.cookieName, token, SecureCookieOptions.cookieOptions())
            res.send({})
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'This email account or username is already in use'
            })
        }
    }

}
