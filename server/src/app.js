
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(morgan('combined')) // prints logs; user agent; verbose logs
app.use(bodyParser.json())
app.use(cors()) // allow any client hit our server; will setup token later


app.listen(process.env.port || 8081)
