const UsersDbo = require('./dbo/UsersDbo')

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

        const foundUsers = new Array()
        if (users) {

            users.forEach(function (user) {
                var newUser = this.toJson(user)
                foundUsers.push(newUser)
            })
        }


        return foundUsers
    }

    doesEmailExist(email) {
        const users = this.byEmail(email)
        return users.length > 0
    }

    async byUserName (username) {
        const users = await UsersDbo.query().where('username', username)
        const foundUsers = new Array()
        if (users) {

            users.forEach(function (user) {
                var newUser = this.toJson(user)
                foundUsers.push(newUser)
            })



        }

        return foundUsers
    }

    doesUsernameExist(username) {
        const users = this.byUserName(username)
        return users.length > 0
    }

    //make sure user attributes are always what i expect
    // the database schema or database mapper library could change
    // but my api won't
    toJson(user) {

        if (user) {
            return {
                "id" : user.id,
                "email": user.email,
                "username": user.username,
                "locationId": user.locationId
            }
        }

        return {}
    }

}

module.exports = UsersFactory
