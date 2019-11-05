const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`Hi i'm root of /customer`)
})

app.get('/:id', (req, res) => {
  const { id } = req.params
  res.send(`Hello ${id}`)
})

module.exports = app
