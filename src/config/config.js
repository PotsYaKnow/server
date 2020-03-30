const path = require('path')

module.exports = {
    env: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'development' : 'production',
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
    },
    clientDomain: process.env.clientUrl || 'http://localhost:8000',
    cloudinary:{
        name: process.env.cloudinary_namne || 'potsyaknow',
        apiKey: process.env.cloudinary_apiKey || '457124294683199',
        secret: process.env.cloudinary_secret || '46VWTwdZbsOPLgknPUcAEZAR5Ys',
        url : process.env.cloudinary_url || 'cloudinary://457124294683199:46VWTwdZbsOPLgknPUcAEZAR5Ys@potsyaknow'
    }
}
