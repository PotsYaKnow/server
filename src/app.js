const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const config = require('./config/config')
const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

let knexConntection = null
let originDomain = null

if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
{
  knexConnection = Knex(connection.development)
}
else
{
  knexConnection = Knex(connection.production)
}

Model.knex(knexConnection)

const app = express()
app.use(morgan('combined')) // prints logs; user agent; verbose logs
app.use(bodyParser.json())
app.use(cookieParser())

//setup cors
const corsMod = cors({
    origin: config.clientDomain,
    credentials: true,
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'origin']
})

app.use(corsMod)




require('./routes/index')(app)


app.listen(config.port)
console.log(`Server started on port ${config.port}`)
