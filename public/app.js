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

    // ////////////////// Login /////////////////////////////

    scope.toLog = function () {
      window.location = 'login.html'
    }
    scope.login = function (input) {
      $http.post('/login', { username: input.username,  password: input.password})
        .then(function success (response) {
          console.log(response)
          if ((input.username == response.data[0].username) && (input.password == response.data[0].password)) {
            console.log('have user ')

            window.location = 'report.html'
          } else {
            window.location = 'login.html'
          }

        }, function error (response) {
          alert(response.data.message)
        })
    }

    // ////////////////// Login /////////////////////////////

  })
