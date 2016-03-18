(function(){
'use strict';

angular.module('myApp', [
	'ui.router',
	'login',
	'reg',
	'ngFlash',
	'adminDash',
])

.config([
	'$urlRouterProvider', function($urlRouterProvider){
		$urlRouterProvider.otherwise('/login')
	}
]);

})();