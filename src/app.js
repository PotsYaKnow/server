const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')


const app = express()
app.use(morgan('combined')) // prints logs; user agent; verbose logs
app.use(bodyParser.json())

app.use(cors()) // allow any client hit our server; will setup token later


require('./passport')
require('./routes/index')(app)

sequelize.sync({force: false}).
then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})
