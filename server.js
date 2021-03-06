var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/iot_db')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./models/login/login_route.js'))

var iot = require('./models/iotdata/iotdata.route.js')
app.use('/', iot)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
