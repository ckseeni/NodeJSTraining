var express = require('express');
var router = express.Router();
var controller = require('../controller/basecontroller');
var controllerobj = new controller();
/*const SchemaValidator = require('../middlewares/SchemaValidator');

const validateRequest = SchemaValidator(true);

const genericHandler = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
}

router.post('/people', validateRequest, genericHandler);*/

/* GET home page. */
router.get('/', function(req, res, next) {
  controllerobj.indexPage(res);
  //res.render('index', {title: 'Welcome to registration'});
});

router.post('/register', function(req, res, next) {
   controllerobj.registerUser(req, res);
  //res.render('index', {title: 'registered successfully'});
});

router.get('/list', function(req, res) {
  controllerobj.listUser(req,res);
});

module.exports = router;
