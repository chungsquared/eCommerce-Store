(function(){
'use strict';

var LoginService = function($http){

	this.login = function(data, callback){

  	// console.log(data)
  	// console.log($http)
    // something with the data
    $http.post('/login',data)
    	.then(function success(){
    		console.log("success")
    	}, function error(){
    		console.log("error")
    	})
    // callback();
  };
};

angular
  .module('myApp')
  .service('LoginService', [
	"$http",
    LoginService,

  ]);


})();