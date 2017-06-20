var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/zuzuwang');
var AuthController = require('../controllers/auth');
var passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false})


router.get('/test', requireAuth, function(req, res, next) {
	res.send({hi: 'there'})
})
router.post('/signup', AuthController.signup);

module.exports = router;

