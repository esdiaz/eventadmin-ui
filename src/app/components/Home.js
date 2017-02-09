(function () {
	'use strict';
	angular
	.module('app')
	.component('homeComponent', {
		templateUrl: 'app/components/Home.html',
		controller: HomeController,
		controllerAs: 'vm'
	});

	function HomeController($compile, $scope, PostService,
		RequestTypeService, FrecuencyTypeService, ServiceTypeService,
		TaskTypeService, RequestTypeServiceTest) {
			var vm = this;

			vm.days = [
				{id:0, description:'Todos'},
				{id:1, description:'Lunes'},
				{id:2, description:'Martes'},
				{id:3, description:'Miercoles'},
				{id:4, description:'Jueves'},
				{id:5, description:'Viernes'},
				{id:6, description:'Sabado'},
				{id:7, description:'Domingo'}
			];
			//vm.multipleDays = vm.days;

			function changeDay(newValue, oldValue) {
				if(newValue != undefined) {
					for(var x=0; x<newValue.length; x++) {
						if(newValue[x].id == 0 && newValue.length > 1 ) {
							var selected = newValue[newValue.length-1];
							if(newValue[newValue.length-1].id != 0) {
								newValue.splice(x,1);
							}else{
								vm.multipleDays.selectedDay = null;
								vm.multipleDays.selectedDay = [selected];
							}
						}
					}
				}
			}

			$scope.$watchCollection('vm.multipleDays.selectedDay', changeDay);

			RequestTypeService.findAll().then(function(response){
				vm.resquestTypes = response.data;
			});

			FrecuencyTypeService.findAll().then(function(response){
				vm.frecuencyTypes = response.data;
			});

			ServiceTypeService.findAll().then(function(response){
				vm.serviceTypes = response.data;
			});

			TaskTypeService.findAll().then(function(response){
				vm.taskTypes = response.data;
			});

			RequestTypeServiceTest.get({'id':1}).$promise.then(function(requestType){
				console.debug(requestType);
			});
			RequestTypeServiceTest.query().$promise.then(function(requestTypes){
				console.debug(requestTypes);
			});

			// RequestTypeServiceTest.delete({'id':3}).$promise.then(function(requestTypes){
			// 	console.debug(requestTypes);
			// });
			// RequestTypeServiceTest.save({'name':'Test'}).$promise.then(function(requestType){
			// 	console.debug(requestType);
			// });

			// RequestTypeServiceTest.update({'id':3,'name':'Test update'}).$promise.then(function(requestType){
			// 	console.debug(requestType);
			// });

	}
})();
