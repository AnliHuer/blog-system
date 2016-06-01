var express = require('express');
var router = express.Router();

var UserIndexController = require('../../controllers/user-index-controller');
var UserIndexController = new UserIndexController();

router.get('/',UserIndexController.displayPage);

module.exports = router;
