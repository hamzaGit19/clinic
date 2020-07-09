(function () {
  'use strict';

  angular
    .module('clinic')
    .factory('AppointmentResource', AppointmentResource);
  AppointmentResource.$inject = ['$resource'];

  function AppointmentResource ($resource) {
    var clientURL =  '/appointments';

    return $resource(clientURL, {id: '@id'}, {
      'create': { method: 'POST' },
    });
  }
})();
