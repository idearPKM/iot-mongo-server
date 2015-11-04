// var express = require('express')
// var bodyParser = require('body-parser')
// var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/db')

// var app = express()
// app.use(express.static('public'))

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// var iotdata = require('./models/iotdata/iotdata.route.js')
// app.use('/api/iotdata', iotdata)

// // app.listen(3000)
// // console.log('run in 3000')

// var server = app.listen(3000, function () {
//   var host = server.address().address
//   var port = server.address().port

//   console.log('App listening at http://%s:%s', host, port)
// })
var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/iot_db')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var iotdata = require('./models/iotdata/iotdata.route.js')
app.use('/api/iotdata', iotdata)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
