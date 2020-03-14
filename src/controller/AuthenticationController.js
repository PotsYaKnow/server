const JWT = require('../policies/JWT')


module.exports = {
    async verifyCookie (req, res, next) {

        if (req.cookies.auth_token) {
            try {
                let userJwt = await JWT.verifyUser(req.cookies.auth_token)
                let user = { 'id': userJwt.sub, 'userName': userJwt.name }
                req.user = user
                next()
            } catch (err) {
                console.log(err)
            }

        }
    },
    async isUserLoggedIn (req, res) {

        if (req.cookies.auth_token) {
            try {
                let userJwt = await JWT.verifyUser(req.cookies.auth_token)

                res.send({ "isUserLoggedIn": true })
            } catch (err) {
                console.log(err)
                res.send({ "isUserLoggedIn": false })
            }

        } else {
            res.send({ "isUserLoggedIn": false })
        }
    }
}
