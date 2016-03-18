var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var User = mongoose.model('User');

module.exports = (function(){
	return {
		register: function (req, res){
			//create new instance of user
			var user = new User(req.body);
			user.createdAt = new Date();
			user.updatedAt = new Date()

			// generate salt
			bcrypt.genSalt(function(err,salt){
				if(err){
					console.log('There was an issue generating the salt')
				}else{
					/* CLEAN UP LATER with promises */
					//add salt to user obj
					user.salt = salt
					//encrypt password
					bcrypt.hash(user.password, user.salt, function(err,encryptedPw){
						if(err){
							console.log("there was an error encrypting the password")
						}else{
							user.password = encryptedPw;
							user.save(function(err,data){
								if(err){
									console.log(err);
									console.log('Error saving new users')
								}else{
									console.log('User saved into DB')
									res.json(data);
								}
							})
						}
					})
				}
			})
		},
		login: function(req,res){
			User.find({"username":req.body.username},function(err, user){
				if(err){
					res.json(err)
				}else{
					if(user.length < 1){ 
						console.log("This username does not exist")
					}else{ //username has been found
						//compare pw
						bcrypt.compare(req.body.password, user[0].password,function(error,result){
							console.log(result)
							if(error){
								console.log("there was an error matching passwords. Please try again")
								res.json(error)
							}
							if(result){
								res.json(user[0]) //password matched, user authenticated
							}else {
								res.json(result) //password did not match
							}
							
						})
					}
				}
			})
		}

		// show: function (req, res){
		// 	Customer.find({}, function(err, customers){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('\nError getting all customers!');
		// 		} else {
		// 			res.json(customers);
		// 		}
		// 	})
		// },
		// remove: function (req, res){
		// 	console.log(req.body._id);
		// 	Customer.remove({_id: req.body._id}, function(err, data){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('\nError removing customer!');
		// 		} else {
		// 			res.redirect('/get_customers');
		// 		}
		// 	})
		// }
	}
})();
