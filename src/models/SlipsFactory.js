const SlipsDbo = require('./dbo/SlipsDbo')
class SlipsFactory {
    async all() {

        const jsonSlips = new Array()
        const foundSlips = await SlipsDbo.query()

        foundSlips.forEach(slip => jsonSlips.push(this.toJson(slip)))

            return jsonSlips
        }

        async byId(id) {
            const foundSlip = await SlipsDbo.query().findById(id)
console.log(foundSlip)
            return this.toJson(foundSlip)
        }

        toJson(slip) {
            if (slip) {
                return {
                    "slipId": slip.id,
                    "slip": slip.slip
                }
            }

            return {}
        }
    }

    module.exports = SlipsFactory
