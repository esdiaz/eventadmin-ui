(function () {
  'use strict';
  angular
    .module('app')
    .component('loginSection', {
      templateUrl: 'app/components/LoginSection.html',
      controller: LoginSection,
      controllerAs: 'vm'
    });

  /**
    * Controlador de inicio de sesion. Almacena en localStorage informacion
    * del usuario. Cambiar por lo que ocupe el proyecto a desarrollar
    * @author Jesus Flores.
    *
  */
  function LoginSection($http, $state, $localStorage, GestionContenedorService, GestionUsuarioService, LoginService) {
    var vm = this;

    // Oculta o muestra el menu de arriba y el side menu
    if (angular.isUndefined($localStorage.estaLogueado) || $localStorage.estaLogueado === false || $localStorage.estaLogueado === 'false') {
      $localStorage.isVisible = false;
      GestionContenedorService.ocultarAside = true;
      GestionContenedorService.ocultarMenu = true;
      GestionContenedorService.ocultarFooter = true;
      GestionContenedorService.claseMenu = true;
      GestionContenedorService.minimumHide = true;
    }

    // Definicion de Funciones para el controlador
    vm.login = login;

    function login(usuario) {
      if (usuario && usuario.usuario && usuario.password) {
        LoginService.login(usuario).then(function (response) {
          if (response.data.codigoRespuesta === 0) {
            $localStorage.id = response.data.userId;
            $localStorage.usuario = response.data.username;
            $localStorage.nombreUsuario = response.data.nombreUsuario;
            $localStorage.estaLogueado = true;

            GestionContenedorService.ocultarAside = false;
            GestionContenedorService.ocultarMenu = false;
            GestionContenedorService.ocultarFooter = false;
            GestionContenedorService.claseMenu = false;
            GestionContenedorService.claseMenu = false;
            GestionContenedorService.minimumHide = false;
            GestionUsuarioService.usuario = response.data.username;
            GestionUsuarioService.nombreUsuario = response.data.nombreUsuario;

            $state.go('home');
          } else {
            swal('No fue posible acceder', 'Credenciales incorrectas', 'warning');
          }
        }).catch(function (response) {
          console.error(response);
          swal('No fue posible acceder', 'Ocurrio un problema, vuelve a intentarlo', 'error');
        });
      } else {
        swal('Ingresa tus datos para continuar', '', 'warning');
      }
    }
  }
})();