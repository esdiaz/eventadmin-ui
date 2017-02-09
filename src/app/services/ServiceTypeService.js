/**
  * Capa de servicio para consumir API de ServiceType
  * @author Enrique Diaz.
*/

(function () {
  'use strict';
  angular.module('app')
  .service('ServiceTypeService', ['$http', 'API_URL_BACKEND', ServiceTypeService]);

  function ServiceTypeService($http, API_URL_BACKEND) {
    var vm = this;
    vm.findAll = findAll;
    return vm;

    function findAll() {
      return $http.get(API_URL_BACKEND.API_URL + '/v1/servicetype');
    }

  }
})();
