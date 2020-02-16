const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const config = require('./config/config')
const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection.development)

Model.knex(knexConnection)



const app = express()
app.use(morgan('combined')) // prints logs; user agent; verbose logs

app.use(bodyParser.json())

app.use(cors({
    origin: 'https://potsyaknow-client.herokuapp.com'}))



require('./routes/index')(app)


app.listen(config.port)
console.log(`Server started on port ${config.port}`)
