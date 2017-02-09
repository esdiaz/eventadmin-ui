/**
  * Capa de servicio para consumir API de FrecuencyType
  * @author Enrique Diaz.
*/

(function () {
  'use strict';
  angular.module('app')
  .service('FrecuencyTypeService', ['$http', 'API_URL_BACKEND', FrecuencyTypeService]);

  function FrecuencyTypeService($http, API_URL_BACKEND) {
    var vm = this;
    vm.findAll = findAll;
    return vm;

    function findAll() {
      return $http.get(API_URL_BACKEND.API_URL + '/v1/frequencytype');
    }

  }
})();
