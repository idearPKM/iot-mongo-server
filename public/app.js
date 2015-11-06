angular.module('app', [])
  .controller('AppController', function ($http, $interval) {
    var scope = this

    getData() // showget api

    $interval(function () {
      getData()

    }, 60000)

    function getData () {
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
          getData()
          alert('Success')

        }, function error (response) {
          alert(response.data.message)
        })

    }

  })
