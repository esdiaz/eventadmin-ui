/**
  * Capa de servicio para consumir API de RequestType
  * @author Enrique Diaz.
*/

(function () {
  'use strict';
  angular.module('app')
  .service('RequestTypeService', ['$http', 'API_URL_BACKEND', RequestTypeService]);

  function RequestTypeService($http, API_URL_BACKEND) {
    var vm = this;
    vm.findAll = findAll;
    return vm;

    function findAll() {
      return $http.get(API_URL_BACKEND.API_URL + '/v1/requesttype');
    }

  }
})();
