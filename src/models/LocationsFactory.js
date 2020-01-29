const LocationsDbo = require('./dbo/LocationsDbo')

class LocationsFactory {
    async all() {

        const jsonLocations = new Array()
        const foundLocations = await LocationsDbo.query()


        foundLocations.forEach(location => jsonLocations.push(this.toJson(location)))
            return foundLocations
        }

       async byId(id) {
            const foundlocation = await LocationsDbo.query().findById(id)

            return this.toJson(foundlocation)
        }

        toJson(location) {
            if (location) {
                return {
                    "locationId": location.id,
                    "country": location.country
                }
            }

            return {}
        }
    }

    module.exports = LocationsFactory
