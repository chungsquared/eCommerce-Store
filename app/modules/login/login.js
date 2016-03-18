(function(){
'use strict';

var LoginCtrl = function($state, LoginService, UserData){
	// since we declared controllerAs in our config, we can use this. rather than $scope.
	// because each instance has its own ctrl
	this.userLogin = function(){
		var data = {
			username:this.username,
			password: this.password,
		}
		console.log(data)
		LoginService.login(data,function(user){
			console.log(user)
			UserData.name = user.firstName; //sets UserData Constant Service
			$state.go('adminDash'); //reroutes to the Admin Dashboard
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
		'UserData',
		LoginCtrl
	]);
})();