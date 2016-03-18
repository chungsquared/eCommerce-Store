var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	username: String,
	email: String,
	password: String,
	salt: String,
	admin: Boolean,
	createdAt: Date,
	updatedAt: Date
});

mongoose.model('User', UserSchema)