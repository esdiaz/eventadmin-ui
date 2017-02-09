(function () {
  angular
    .module('app')
    .service('GestionContenedorService', [GestionContenedorService]);

  function GestionContenedorService() {
    vm = this;

    // Variables
    vm.ocultarAside = false;
    vm.ocultarMenu = false;
    vm.ocultarFooter = false;
    vm.claseMenu = false;
    vm.minimumHide = false;
  }
})();
