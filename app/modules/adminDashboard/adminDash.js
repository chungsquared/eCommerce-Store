(function(){
'use strict';

var AdminDashCtrl = function($state, AdminDashService, UserData){

};

angular
	.module('adminDash',[])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider
			.state('adminDash', {
				url: '/admin',
				templateUrl: 'modules/adminDashboard/adminDash.html',
				controllerAs: 'adminDash', //allows multiple instances of the same ctrl rather than share one
				controller:'AdminDashCtrl' 
			});
	}])

	.controller('AdminDashCtrl',[
		'$state',
		'AdminDashService',
		'UserData',
		AdminDashCtrl
	]);
})();