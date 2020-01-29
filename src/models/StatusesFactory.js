const StatusesDbo = require('./dbo/StatusesDbo')

class StatusesFactory {
    async all() {
        const jsonStatuses = new Array()
        const foundStatuses = await StatusesDbo.query()

        foundStatuses.forEach(status => jsonStatuses.push(this.toJson(status)))

            return jsonStatuses
        }

        async byId(id) {
            const foundStatus = await StatusesDbo.query().findById(id)
            return this.toJson(foundStatus)
        }

        toJson(status) {
            if (status) {
                return {
                    "statusId": status.id,
                    "status": status.status
                }
            }

            return {}
        }
    }



    module.exports = StatusesFactory
