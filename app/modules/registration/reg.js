(function(){
'use strict';

var RegCtrl = function($state, RegService){

	this.register = function(){
		var data = {
			firstName: this.firstName,
			lastName: this.lastName,
			email:this.email,
			username:this.username,
			password: this.password,
			passwordConfirm: this.passwordConfirm
		}
		RegService.register(data)
	}
}
angular
	.module('reg',[])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider
			.state('reg', {
				url: '/register',
				templateUrl: 'modules/registration/reg.html',
				controllerAs: 'reg', //allows multiple instances of the same ctrl rather than share one
				controller:'RegCtrl' 
			});
	}])

	.controller('RegCtrl',[
		'$state',
		'RegService',
		RegCtrl,
	]);
})();