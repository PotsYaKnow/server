const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser (user) {
    return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: "7 days" })
}

module.exports = {

    async signup (req, res) {
        try {
            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                UserLocationId: req.body.userLocation})

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }
    },

    async login (req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {

                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred while trying to login'
            })
        }
    }
}
