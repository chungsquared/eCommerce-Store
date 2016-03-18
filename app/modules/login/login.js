(function(){
'use strict';

var LoginCtrl = function($state, LoginService){
	// since we declared controllerAs in our config, we can use this. rather than $scope.
	// because each instance has its own ctrl
	this.userLogin = function(){
		var data = {
			username:this.username,
			password: this.password,
		}
		LoginService.login(data,function(){
			// UserData.name = data.name; //sets UserData Constant Service
			// $state.go('activityFeed'); //reroutes to activityFeed
		})
	}
}
angular
	.module('login',[])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'modules/login/login.html',
				controllerAs: 'login', //allows multiple instances of the same ctrl rather than share one
				controller:'LoginCtrl' 
			});
	}])

	.controller('LoginCtrl',[
		'$state',
		'LoginService',
		LoginCtrl
	]);
})();