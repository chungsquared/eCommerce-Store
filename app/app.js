(function(){
'use strict';

angular.module('myApp', [
	'ui.router',
	'login',
	'reg',
	'ngFlash'
])

.config([
	'$urlRouterProvider', function($urlRouterProvider){
		$urlRouterProvider.otherwise('/login')
	}
]);

})();