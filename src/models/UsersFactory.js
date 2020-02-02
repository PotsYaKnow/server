const UsersDbo = require('./dbo/UsersDbo')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

class UsersFactory {

    async create (email, username, password, locationId) {
        const user = await UsersDbo.query().insert({
            "email": email,
            "username": username,
            "password": password,
            "locationId": locationId
        })

        if (user) {
            return this.toJson(user)
        }

        return null
    }

    async byEmail (email) {
        const users = await UsersDbo.query().where('email', email)

        if (users && users.length == 1) {
            return this.toJson(users[0])
        }

        return null
    }

    async comparePassword(textPassword, hashedPassword)
    {
        console.log(textPassword)
        console.log(hashedPassword)
        return await bcrypt.compare(textPassword, hashedPassword)
    }

    async byUserName (username) {
        const users = await UsersDbo.query().where('username', username)

        if (users && users.length == 1) {
            return this.toJson(users[0])
        }

        return null
    }
    //make sure user attributes are always what i expect
    // the database schema or database mapper library could change
    // but my api won't
    toJson(user) {

        if (user) {
            return {
                "id": user.id,
                "email": user.email,
                "username": user.username,
                "password": user.password,
                "locationId": user.locationId
            }
        }

        return {}
    }

}

module.exports = UsersFactory
