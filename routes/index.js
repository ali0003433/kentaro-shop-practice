var express = require('express');
var router = express.Router();

const csrf= require('csurf')
const csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res) {
    res.render('shop/index', { title: 'girl' });
});

router.get('/user/signup', function(req, res){
    res.render('user/signup', {csrfToken: req.csrfToken()});
});
module.exports = router;
