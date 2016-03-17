var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	admin: Boolean,
	createdAt: Date,
	updatedAt: Date
});

mongoose.model('User', UserSchema)