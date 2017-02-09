(function () {
	'use strict';
	angular
  	.module('app')
  	.component('notFoundComponent', {
    	templateUrl: 'app/components/NotFound.html',
    	controller: NotFoundController,
    	controllerAs: 'vm'
  	});

	function NotFoundController() {
		vm = this;
	}
})();