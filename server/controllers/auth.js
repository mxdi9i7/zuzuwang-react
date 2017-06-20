const User = require('../models/user');
const jwt= require('jwt-simple')
const config = require('../jwt')

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;
	if (!email || !password) {
		return res.status(422).send({error: 'You must provide email and password'})
	}
	const newUser = new User({
					email: email,
					password: password
				})
	User.findOne({email: email}, function(err, existingUser) {
		if (err) {
			return next(err)
			
		} 
		if (existingUser) {
			return res.status(422).json({err: 'User is existed'})
		}

		newUser.save(function(err) {
				if (err) {
					return next(err)
				}
			}).then(()=> {
				res.json({token: tokenForUser(newUser)})
			})
			
	})

}