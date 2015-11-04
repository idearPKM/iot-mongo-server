angular.module('app', [])
  .controller('AppController', function ($http, $interval) {
    var scope = this

    // scope.list = []
    // scope.master = {
    //   // timestamp: {Date.getTime()},
    //   iot_id: '7',
    //   temperature: 38,
    //   relative_humidity: 60
    // }

    // scope.submit = function () {
    //   if (scope.master) {
    //     scope.list.push(scope.master)
    //     scope.master = ''
    //   }
    // }

    getDatas() // showget api

    $interval(function () {
      getDatas()

    }, 60000)

    function getDatas () {
      $http.get('/api/iotdata')

        .then(function success (response) {
          scope.iotdata = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    scope.submit = function (input) {
      alert('yes insert')
      saveData(input)
    }

    function saveData (data) {
      $http.post('/api/iotdata', data) // insert object
        .then(function success (response) {
          console.log(response)
          getDatas()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })

    }

  })
