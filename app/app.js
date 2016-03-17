(function(){
'use strict';

angular.module('myApp', [
	'ui.router'
])

.config([
	'$urlRouterProvider', function($urlRouterProvider){
		$urlRouterProvider.otherwise('/login')
	}
]);

})();