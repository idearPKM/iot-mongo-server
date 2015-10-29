var express = require('express')
var router = express.Router()

var Data = require('../models/data')

Data.methods(['get', 'put', 'post', 'delete'])
Data.register(router, '/data')

module.exports = router
