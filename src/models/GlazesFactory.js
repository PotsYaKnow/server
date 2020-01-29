const GlazesDbo = require('./dbo/GlazesDbo')
class GlazesFactory {
    async all() {

        const jsonGlazes = new Array()
        const foundGlazes = await GlazesDbo.query()

        foundGlazes.forEach(glaze => jsonGlazes.push(this.toJson(glaze)))

            return jsonGlazes
        }

        async byId(id) {
            const foundGlaze = await GlazesDbo.query().findById(id)

            return this.toJson(foundGlaze)
        }

        toJson(glaze) {
            if (glaze) {
                return {
                    "glazeId": glaze.id,
                    "glaze": glaze.glaze
                }
            }

            return {}
        }
    }

    module.exports = GlazesFactory
