var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = require('../dbConfig.js');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://mxdi9i7.auth0.com/.well-known/jwks.json"
  }),
  // Identifier we set when we created the API
   audience: 'https://www.zuzuwang.com',
    issuer: "https://mxdi9i7.auth0.com/",
    algorithms: ['RS256']
})



var usersCollection = db.collection('users');
var listingsCollection = db.collection('listings');


/* GET home page. */
router.get('/users', function(req, res, next) {

    usersCollection.find(function(err, docs) {
        res.json(docs);
    })
  
});
router.get('/user/:id', function(req, res, next) {
    const { id } = req.params;

    usersCollection.findOne({_id: mongojs.ObjectId(id)},function(err, doc) {
        res.json(doc);
    })
  
});

router.get('/listings/free', function(req, res, next) {

    listingsCollection.find({isPro: false}, function(err, docs) {
        res.json(docs);
    })
  
});

router.get('/listings/pro', function(req, res, next) {

    listingsCollection.find({isPro: true}, function(err, docs) {
        res.json(docs);
    })
  
});

module.exports = router;
