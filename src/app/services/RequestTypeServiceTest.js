(function () {
  'use strict';

  angular.module('app')
  .factory('RequestTypeServiceTest', ['$resource', 'API_URL_BACKEND',RequestTypeServiceTest]);

  function RequestTypeServiceTest($resource, API_URL_BACKEND) {
    var API_URL = API_URL_BACKEND.API_URL + '/v1/requesttype/:id';
    return $resource(API_URL, { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
