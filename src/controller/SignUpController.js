const UsersFactory = require('../models/UsersFactory')
const SecureCookie = require('../policies/SecureCookie')
const JWT = require('../policies/JWT')

function jwtClaims(user)
{
    return {
        client_id: user.id,
        email: user.email,
        name: user.username
    }
}
module.exports = {

    async signup (req, res) {
        try {
            const usersFactory = new UsersFactory();


            const user = await usersFactory.create(req.body.username,
                req.body.email,
                req.body.password,
                req.body.locationId)

            const token = JWT.jwtSignUser(user)
            res.cookie('U', token, SecureCookie.cookieOptions())
            res.send({})
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'This email account or username is already in use'
            })
        }
    }

}
