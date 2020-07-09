angular
  .module('clinic')
  .controller('AppointmentCtrl', function($scope, AppointmentResource, ClientResource, notificationService){
    $scope.types = [
      {
        name: 'Diet Plans',
        value: 'diet_plan'
      },
      {
        name: 'Weight management',
        value: 'weight_management'
      },
      {
        name: 'Consultation',
        value: 'consultation'
      },
    ]

    $scope.user = null;
    $scope.appointment = null;
    notificationService.success('cool')
     $scope.populate = function() {
      var times = [];
      var hours, minutes, ampm;
      for (var i = 0; i <= 1450; i += 60) {
          hours = Math.floor(i / 60);
          minutes = i % 60;
          if (minutes < 10) {
              minutes = '0' + minutes; // adding leading zero to minutes portion
          }
          var time = hours + ':' + minutes;
          times.push(time);
      }
      return times;
    }

    $scope.save = function () {
      let a = $scope.appointment.time;
      let b = $scope.appointment.date;
      $scope.appointment.time = moment(b.toDateString() +" " + a)._d;
      ClientResource.create({user: $scope.user}).$promise.then(function(user){
        $scope.appointment.user_id = user.id;
        AppointmentResource.create({ appointment: $scope.appointment }).$promise.then(function (appointment) {
          $scope.appointment = null;
        });
      });
    };
  })
