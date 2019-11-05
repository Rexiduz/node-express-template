const express = require('express')
const customer = require('./controller/customers')

const router = express.Router()

router.use('/customer', customer)

module.exports = router
