const FiringTempsDbo = require('./dbo/FiringTempsDbo')

class FiringTempsFactory {
    async all() {

        const jsonFiringTemps = new Array()
        const foundFiringTemp = await FiringTempsDbo.query()

        foundFiringTemp.forEach(firingTemp => jsonFiringTemps.push(this.toJson(firingTemp)))

            return jsonFiringTemps
        }

        async byId(id) {
            const foundfiringTemp = await FiringTempsDbo.query().findById(id)

            return this.toJson(foundfiringTemp)
        }

        toJson(firingTemp) {
            if (firingTemp) {
                return {
                    "firingTempId": firingTemp.id,
                    "temperature": firingTemp.temperature
                }
            }

            return {}
        }
    }

    module.exports = FiringTempsFactory
