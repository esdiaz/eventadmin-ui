angular
 	.module('app')
  .component('mainComponent', {
    templateUrl: 'app/components/Main.html',
    controller: MainComponent,
    controllerAs: 'mainComponent'
  });

function MainComponent(GestionContenedorService) {
 		mainComponent = this;
 		mainComponent.gestionContenedorService = GestionContenedorService;
}
