const express = require('express')
const app = express()

app.use((req, _, next) => {
  const { host } = req.headers

  if (host !== 'localhost:3000') return next()
  throw new Error('Not allow')
})

module.exports = app
