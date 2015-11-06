// ;(function () {
//   'use strict'
//   var modelName = 'iotdata'
//   var mongoose = require('mongoose')
//   var Schema = mongoose.Schema
//   var iotdata = new Schema({
//     timestamp: { type: Date, default: Date.now },
//     iot_id: String,
//     temperature: Number,
//     relative_humidity: Number

//   })
//   module.exports = mongoose.model(modelName, iotdata)
// })()

;(function () {
  'use strict'
  var modelName = 'iotdata'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    timestamp: { type: Date,  default: Date.now},
    iot_id: {
      type: Number,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    relative_humidity: {
      type: Number,
      required: true
    },
  })

  module.exports = mongoose.model(modelName, schema)
})()
