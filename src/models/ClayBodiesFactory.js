const ClayBodiesDbo = require('./dbo/ClayBodiesDbo')

class ClayBodiesFactory {
    async all() {
        const jsonClayBodies = new Array()
        const foundClayBodies = await ClayBodiesDbo.query()

        foundClayBodies.forEach(clayBody => jsonClayBodies.push(this.toJson(clayBody)))

            return jsonClayBodies

        }

        async byId(id) {
            const foundClayBodies = await ClayBodiesDbo.query().findById(id)

            return this.toJson(foundClayBodies)
        }

        toJson(foundClayBodies) {
            if (foundClayBodies) {

                return {
                    "clayBodyId": foundClayBodies.id,
                    "clayBody": foundClayBodies.clayBody
                }
            }

            return {}
        }
    }

    module.exports = ClayBodiesFactory
