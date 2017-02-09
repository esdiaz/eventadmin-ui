angular
.module('app')
.component('asideComponent', {
  templateUrl: 'app/components/Aside.html',
  controller:AsideController,
  controllerAs:'asideController'
});

  /**
    * Controlador del sidebar menu
    * @author Ing. Leonel Contreras, Jesus Flores.
    *
    * History
    *
  */
  function AsideController() {
    asideController = this;

    // Variables de comparacion
    var MENU_SELECCIONADO = false;

    // Variables de datos
    asideController.openmenu = false;

    // Funciones
    asideController.onSelectMenu = onSelectMenu;

    // Funcion que se ejecuta al seleccionar el menu
    function onSelectMenu() {
      if (asideController.openmenu === MENU_SELECCIONADO) {
        asideController.openmenu = true;
      } else {
        asideController.openmenu = false;
      }
    }
  }
