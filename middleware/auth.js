const express = require('express')
const app = express()

app.use((req, _, next) => {
  const { authorization } = req.headers

  if (authorization) return next()
  throw new Error('Please login')
})

module.exports = app
