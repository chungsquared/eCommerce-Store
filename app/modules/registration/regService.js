(function(){
'use strict';

var RegService = function($http){

	this.register = function(data, callback){

    var validation = formValidation(data) // validate data

    if(validation.errors){
      console.log(validation.messages)
    }else{
      $http.post('/register', data)
        .then(function success(user){
          console.log(user)
          console.log("Registered successfully")
        }, function error(err){
          console.log("Unsuccessful registration")
        })
    }
  };
};

angular
  .module('myApp')
  .service('RegService', [
	"$http",
    RegService,

  ]);

function formValidation(formData){
    var errorMsg = []
    //validate data
    if (!formData.firstName){
      errorMsg.push("Please fill in the First Name Field")
    }
    if (!formData.lastName){
      errorMsg.push("Please fill in the Last Name Field")
    }
    if (!formData.email){
      errorMsg.push("Please fill in the Email Field")
    }
    if( !validateEmail(formData.email)){
      errorMsg.push("Please enter a valid email")
    }
    if (!formData.username){
      errorMsg.push("Please fill in the Username Field")
    }
    if (formData.password == undefined || formData.password.length < 7){
      errorMsg.push("Password must be at least 7 characters long")
    }
    if (formData.password !== formData.passwordConfirm){
      errorMsg.push("Passwords do not match")
    }
    if(errorMsg.length > 0){
      return {
        errors: true,
        messages: errorMsg
      }
    }

    return {
      errors:false
    }

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

})();

