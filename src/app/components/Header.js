angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
    controller: HeaderController,
    controllerAs: 'headerController'
  });

function HeaderController($localStorage, GestionContenedorService, GestionUsuarioService) {
  headerController = this;
  headerController.gestionContenedorService = GestionContenedorService;
  headerController.gestionUsuarioService = GestionUsuarioService;

  // Funciones
  headerController.cerrarSesion = cerrarSesion;

  if ($localStorage.usuario) {
    headerController.gestionUsuarioService.nombreUsuario = $localStorage.nombreUsuario;
    headerController.gestionUsuarioService.usuario = $localStorage.usuario;
  }

  // Funcion para cerrar sesion
  function cerrarSesion() {
    $localStorage.$reset({
      nombreUsuario: undefined,
      usuario: undefined,
      id: undefined,
      estaLogueado: undefined
    });
  }
}
