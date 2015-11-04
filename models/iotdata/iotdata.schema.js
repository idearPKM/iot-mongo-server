;(function () {
  'use strict'
  var modelName = 'iotdata'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema
  var iotdata = new Schema({
    timestamp: { type: Date, default: Date.now },
    iot_id: String,
    temperature: Number,
    relative_humidity: Number

  })
  module.exports = mongoose.model(modelName, iotdata)
})()
