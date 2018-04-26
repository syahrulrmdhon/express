var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
  	id: 001,
    username: "syahrulr",
    email: "syahrul@djavaweb.com"
  }, {
  	id: 002,
    username: "romadhon",
    email: "syahrulrmdhon@gmail.com"
  }]);
});

module.exports = router;
