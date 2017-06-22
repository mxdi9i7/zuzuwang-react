const passport = require('passport')
const User = require('../models/user');
const config = require('../jwt')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')

//local strategy
const localOptions = { usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function(email, passport, done) {
	//verify this username and passpword call done with the user if it is the correct username and password
	
})



// set up options for jwt strategy

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('auth'),
	secretOrKey: config.secret
}

//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// See if user ID in this payload exists in our database
	User.findById(payload.sub, function(err, user) {
		if (err) {
			return done(err, false);
		}
		if (user) {
			done(null, user)
		} else {
			done(null, false)
		}
	})
	// If it does, call 'done' with that

	//otherwise, call done without a user object
})
passport.use(jwtLogin)