var express = require('express');
var router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf();

router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
    // let products = Product.find();
    res.render('shop/index', { title: 'shop-practice' });
});

router.get('/user/signup', function(req,res, next){
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

module.exports = router;
