var express = require('express');
var router = express.Router();

var UserRegisterController = require('../../controllers/user-register-controller');
var UserRegisterController = new UserRegisterController();

router.get('/', UserRegisterController.displayPage);

router.post('/', UserRegisterController.add);

module.exports = router;
