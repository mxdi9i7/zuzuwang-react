var mongojs = require('mongojs')
var db = mongojs('mongodb://localhost:27017/zuzuwang', ['users', 'listings'])

module.exports = db;