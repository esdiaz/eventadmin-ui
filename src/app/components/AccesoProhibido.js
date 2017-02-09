(function () {
	'use strict';
	angular
	.module('app')
	.component('accesoProhibidoComponent', {
    	templateUrl: 'app/components/AccesoProhibido.html',
    	controller: AccesoProhibidoController,
    	controllerAs: 'vm'
  	});

	function AccesoProhibidoController() {
		vm = this;
	}
})();