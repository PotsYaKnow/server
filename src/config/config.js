const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'potsyaknow',
        user: process.env.DB_USER || 'potsyaknow',
        password: process.env.DB_PASS || 'potsyaknow',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname,'../../potsyaknow.sqlite3')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
