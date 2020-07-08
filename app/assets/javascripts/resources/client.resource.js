(function () {
  'use strict';

  angular
    .module('clinic')
    .factory('ClientResource', ClientResource);
  ClientResource.$inject = ['$resource'];

  function ClientResource ($resource) {
    var clientURL =  '/clients';

    return $resource(clientURL, {id: '@id'}, {
      'create': { method: 'POST' },
    });
  }
})();
