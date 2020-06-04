'use strict'

const { createWriteStream } = require('fs')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const errorHandler = require('errorhandler')
const {
  cors,
  notFound,
  devErrorHandler,
  prodErrorHandler
} = require('./middlewares')

require('./models/user')
require('./config/validationLocale')

const isProduction = process.env.NODE_ENV === 'production'

const accessLogStream = createWriteStream(
  path.join(__dirname, '..', 'logs', 'access.log'),
  { flags: 'a' }
)

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('combined', { stream: accessLogStream }))

app.use(require('./routes'))

// Catch 404 and forward to error handler
app.use(notFound())

// Handling error on development mode
if (!isProduction) {
  app.use(errorHandler())
  app.use(devErrorHandler())
}

// Handling error on production mode
app.use(prodErrorHandler())

module.exports = app
