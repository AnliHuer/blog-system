var express = require('express');
var router = express.Router();

var UserAboutController = require('../../controllers/user-about-controller');
var UserAboutController = new UserAboutController();

router.get('/',UserAboutController.displayPage);

router.post('/',UserAboutController.updateUserInfo);

module.exports = router;
