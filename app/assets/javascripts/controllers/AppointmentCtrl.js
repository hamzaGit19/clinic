angular
  .module('clinic')
  .controller('AppointmentCtrl', function($scope, AppointmentResource, ClientResource){
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
      ClientResource.create({user: $scope.user}).then(function(user){
      });
    };
  })