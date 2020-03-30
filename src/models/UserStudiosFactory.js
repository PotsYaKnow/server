const UserStudiosDbo = require('./dbo/UserStudiosDbo')

class UserStudiosFactory {

    async create (userId, studioName, photo) {
        const studio = await UserStudiosDbo.query().insert({
            "userId": userId,
            "name": studioName,
            "photo": photo
        })

        if (studio) {
            return this.toJson(studio)
        }

        return null
    }

    async byId(id)
    {
        const studio = await UserStudiosDbo.query().findById(id)

        if(studio)
        {
            return this.toJson(studio)
        }

        return null
    }

    async edit (id, studioName) {

        const studio = await UserStudiosDbo.query().patchAndFetchById(id,{
            "name": studioName
        })

            return !!studio ? this.toJson(studio) : null
    }

    async delete(id)
    {
        return await UserStudiosDbo.query().deleteById(id)
    }

    async byUserId (userId) {

        const jsonStudios = new Array()
        const foundStudios = await UserStudiosDbo.query().where({
            "userId": userId
        })

        foundStudios.forEach(studio => jsonStudios.push(this.toJson(studio)))

        return jsonStudios
    }

    toJson(studio) {
        if (studio) {
            return {
                "id": studio.id,
                "name": studio.name,
                "photo": studio.photo
            }
        }

        return {}
    }

}

module.exports = UserStudiosFactory
