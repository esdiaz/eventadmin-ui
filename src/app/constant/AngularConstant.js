
  /**
    * Aqui van todas las constantes que utilizara la aplicacion
    * @author Jesus Flores.
  */

(function () {
  'use strict';
   angular.module('app')
   .constant('API_URL_BACKEND', {
      API_URL: 'http://localhost:8080/eventadmin/api'
   })
   .constant('APLICACION_RUTAS', {
      LOGIN: '/login',
      INICIO: '/home',
      ACCESO_PROHIBIDO: '/accesoprohibido',
      PAGINA_NO_ENCONTRADA: '/notfound'
   });
})();
