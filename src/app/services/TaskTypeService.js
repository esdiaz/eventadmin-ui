/**
  * Capa de servicio para consumir API de TaksType
  * @author Enrique Diaz.
*/

(function () {
  'use strict';
  angular.module('app')
  .service('TaskTypeService', ['$http', 'API_URL_BACKEND', TaskTypeService]);

  function TaskTypeService($http, API_URL_BACKEND) {
    var vm = this;
    vm.findAll = findAll;
    return vm;

    function findAll() {
      return $http.get(API_URL_BACKEND.API_URL + '/v1/tasktype');
    }

  }
})();
