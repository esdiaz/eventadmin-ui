/**
  * Clase de servicio que proporciona funcionalidad para la pagina de
  * logueo
  * @author Jesus Flores.
*/

(function () {
  'use strict';
  angular.module('app')
  .service('LoginService', ['$http', '$q', LoginService]);

  function LoginService($http, $q) {
    var vm = this;
    vm.login = login;
    vm.obtenerPosts = obtenerPosts;
    // Reemplazar la funcionalidad por una que envie peticion a una api
    // Actualmente regresa una promesa con un objeto simulando la peticion
    function login(usuario) {
      return $q(function(resolve) {
        var response = {
          data: null
        };

        var datosUsuario = {
          codigoRespuesta: 0,
          userId: 1,
          username: usuario.usuario,
          nombreUsuario: 'Usuario Famsa'
        };

        response.data = datosUsuario;
        resolve(response);
      });
    }

    function obtenerPosts() {       
      return $http('http://jsonplaceholder.typicode.com/posts');     
    }


  }
})();