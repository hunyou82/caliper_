var express = require('express');
var router = express.Router();

var caliperIndexController = require('../controllers/caliperIndex');
var caliperContextController = require('../controllers/caliperContext');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  
  res.header('Uuid', common.util.makeUuid({var:'time-based'}));
  res.render('index', { title: 'Express' });
});*/

router.get('/', caliperIndexController.setEvent);

router.get('/context/getUser', caliperContextController.getUser);

module.exports = router;
