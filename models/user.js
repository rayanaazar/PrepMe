/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isAlphanumeric,  
			message: 'Invalid username - Should contains only letters and numbers.'
		}
	}, 
	password: {
		type: String,
		required: true,
		minlength: 6
	}
})

// Model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }