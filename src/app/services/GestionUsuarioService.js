(function () {
  angular
    .module('app')
    .service('GestionUsuarioService', [GestionUsuarioService]);

  function GestionUsuarioService() {
    vm = this;

    // Variables
    vm.usuario = '';
    vm.nombreUsuario = '';
    vm.imagen = '';
  }
})();
