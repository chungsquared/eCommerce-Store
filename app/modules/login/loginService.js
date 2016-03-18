(function(){
'use strict';

var LoginService = function($http){

	this.login = function(data, callback){

	    // something with the data
	    $http.post('/login',data)
	    	.then(function success(res){
	    		if(res.data){
	    			console.log(res)
					console.log("correct pw")
					callback(res.data)
	    		}else{
	    			console.log(res)
	    			console.log("incorrect pw")
	    		}
	    	}, function error(err){
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