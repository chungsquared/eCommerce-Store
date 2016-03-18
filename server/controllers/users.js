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
