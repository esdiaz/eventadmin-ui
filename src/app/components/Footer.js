angular
  .module('app')
  .component('footerComponent', {
    templateUrl: 'app/components/Footer.html',
    controller: FooterComponent,
    controllerAs: 'footerComponent'
  });

function FooterComponent(GestionContenedorService) {
  footerComponent = this;
  footerComponent.gestionContenedorService = GestionContenedorService;
}
