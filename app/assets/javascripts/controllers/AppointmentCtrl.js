angular
  .module('clinic')
  .controller('AppointmentCtrl', function($scope, AppointmentResource){
    var entries = AppointmentResource.query(function() {
      console.log('kuch hua ha')
      console.log(entries);
    });
  })