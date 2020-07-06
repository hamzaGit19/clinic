(function () {
  'use strict';
  angular
    .module('clinic')
    .factory('AppointmentResource', function ($resource) {
      return $resource('/appointments'); // Note the full endpoint address
    });
})();
