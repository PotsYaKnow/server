const UsersFactory = require('../models/UsersFactory')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser (user) {
    return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: "7 days" })
}


module.exports = {

    async signup (req, res) {
        try {
            const usersFactory = new UsersFactory();

            if (usersFactory.doesEmailExist(req.body.email) ||
                usersFactory.doesUsernameExist(req.body.username)) {
                //send email or username exist error msg
                res.status(409).send({
                    error: 'This email or username is already in use'
                })
            }

            //create new user
            const user = await usersFactory.create(
                req.body.username,
                req.body.email,
                req.body.password,
                req.body.locationId)




            const userJson = usersFactory.toJson(user)

            res.send({
                "user": userJson,
                "token": jwtSignUser(userJson)
            })
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Invalid signup credentials'
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
