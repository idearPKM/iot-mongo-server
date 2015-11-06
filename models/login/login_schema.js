;(function () {
  'use strict'
  var modelName = 'login'
  var restful = require('node-restful')
  var mongoose = restful.mongoose

  var member = new mongoose.Schema({
    username: String,
    password: String

  })

  module.exports = restful.model(modelName, member)
})()
