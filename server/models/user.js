const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
mongoose.Promise = global.Promise;
//Define our model
const userSchema = new Schema({
	email: {type: String, unique: true, lowercase: true},
	password: String
})

userSchema.pre('save', function(next) {
	const user = this;


	// generate a salt
	bcrypt.genSalt(10, function(err, salt) {
		if (err) {return next(err)}

		//has password using the salt
		bcrypt.hash(user.password, salt,null, function(err, hash) {
			if (err) {
				return next(err);

			}
		//override plain text password with encrypted password
				user.password = hash;
				next();
		})
	})
})

userSchema.methods.comparePass = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) {
			return callback(err)
		}
		callback(null, isMatch)
	})
}

//Create the model class
const ModelClass = mongoose.model('users', userSchema)




//Export the model
module.exports = ModelClass