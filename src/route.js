angular
  .module('app')
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, APLICACION_RUTAS) {
  $urlRouterProvider.otherwise(APLICACION_RUTAS.PAGINA_NO_ENCONTRADA);
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('login', {
      cache: false,
      url: APLICACION_RUTAS.LOGIN,
      component: 'login',
      resolve: {
        check: validarUsuarioLoginExistente
      }
    })
    .state('home', {
      url: APLICACION_RUTAS.INICIO,
      component: 'homeComponent',
      resolve: {
        check: validarUsuarioDatos
      }
    })    
    .state('accesoProhibido', {
      url: APLICACION_RUTAS.ACCESO_PROHIBIDO,
      component: 'accesoProhibidoComponent',
      resolve: {
        check: validarUsuarioDatos
      }
    })
    .state('notFound', {
      url: APLICACION_RUTAS.PAGINA_NO_ENCONTRADA,
      component: 'notFoundComponent',
      resolve: {
        check: validarUsuarioDatos
      }
    });

  // Funcion para redireccionar en caso que el usuario no este logeado
  // o que no tenga el permiso para entrar al modulo
  function validarUsuarioDatos($location) {
    if (angular.isUndefined(localStorage['ngStorage-id'])) {
      $location.path(APLICACION_RUTAS.LOGIN);
    }
  }

  // Funcion para redireccionar a la pagina principal en caso de que el usuario ya este logueado
  function validarUsuarioLoginExistente($location) {
    if (!angular.isUndefined(localStorage['ngStorage-id'])) {
      $location.path(APLICACION_RUTAS.INICIO);
    }
  }
}
