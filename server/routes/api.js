var express = require('express');
var router = express.Router();
var db = require('../dbConfig.js');

var usersCollection = db.collection('users');
var listingsCollection = db.collection('listings');
/* GET home page. */
router.get('/users', function(req, res, next) {

    usersCollection.find(function(err, docs) {
        res.json(docs);
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
