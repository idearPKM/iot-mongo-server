var restful = require('node-restful')
var mongoose = restful.mongoose

var data = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  iot_id: String,
  temperature: Number,
  relative_humidity: Number

})

module.exports = restful.model('data', data)
