const FiringAtmospheresDbo = require('./dbo/FiringAtmospheresDbo')

class FiringAtmospheresFactory {
    async all() {

        const jsonFiringAtmospheres = new Array()
        const foundFiringAtmospheres = await FiringAtmospheresDbo.query()

        foundFiringAtmospheres.forEach(firingAtmoshpehere => jsonFiringAtmospheres.push(this.toJson(firingAtmoshpehere)))

            return jsonFiringAtmospheres
        }

        async byId(id) {
            const foundfiringAtmosphere = await FiringAtmospheresDbo.query().findById(id)

            return this.toJson(foundfiringAtmosphere)
        }

        toJson(foundfiringAtmosphere) {
            if (foundfiringAtmosphere) {
                return {
                    "firingAtmoshpehereId": foundfiringAtmosphere.id,
                    "atmosphere": foundfiringAtmosphere.atmosphere
                }
            }

            return {}
        }
    }

    module.exports = FiringAtmospheresFactory
