var express = require('express');
var router = express.Router();

const csrf= require('csurf')
const csrfProtection = csrf();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'girl' });
});

router.get('/user/signup', function(req, res, next){
  res.render('user/signup', {csrfToken: req.csrfToken()});
});
module.exports = router;
