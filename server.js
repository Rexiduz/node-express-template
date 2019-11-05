const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const routes = require('./routes')
const _404 = require('./_404')
const { SERVER_PORT, SERVER_DOMAIN } = require('./settings')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', routes)
app.use(_404)

app.listen(SERVER_PORT, SERVER_DOMAIN, () => {
  console.log(`Listening on ${SERVER_DOMAIN}:${SERVER_PORT}`)
})
