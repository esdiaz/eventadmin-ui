angular
  .module('app', ['ngResource', 'ngRoute', 'ui.router', 'ngAnimate', 'ui.bootstrap', 'ui.select', 'ngSanitize', 'datatables', 'datatables.buttons', 'kendo.directives', 'AngularPrint', '720kb.datepicker', 'angularMoment', 'ngStorage', 'angular-storage'])
  .config(function ($httpProvider) {    
  })
  .controller('Login', function ($localStorage) {
    $localStorage.isVisible = true;
    this.isVisible = $localStorage.isVisible;
  });
