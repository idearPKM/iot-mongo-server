angular.module('app', [])
  .controller('AppController', function ($http) {
    var scope = this

    scope.master = {
      // timestamp: {Date.getTime()},
      iot_id: '7',
      temperature: 38,
      relative_humidity: 60
    }

    // addData()

    // scope.submit = function (input) {
    //   saveData(input)
    // }

    // function addData () {
    //   $http.get('/route/api')
    //     .then(function success (response) {
    //       scope.iotdata = response.data
    //     }, function error (response) {
    //       alert(response.data.message)
    //     })
    // }

  // function saveData (data) {
  //   $http.post('/route/api', data)
  //     .then(function success (response) {
  //       console.log(response)
  //       addData()
  //       alert('Success')
  //     }, function error (response) {
  //       alert(response.data.message)
  //     })
  // }
  })
