var express = require('express');
var router = express.Router();

var UserLoginController = require('../../controllers/user-login-controller');
var UserLoginController = new UserLoginController();

router.get('/',UserLoginController.displayPage);

router.post('/',UserLoginController.onValidate);

module.exports = router;
