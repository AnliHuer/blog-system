var express = require('express');
var router = express.Router();

var UserWordController = require('../../controllers/user-word-controller');
var UserWordController = new UserWordController();

router.get('/', UserWordController.getAllWord);

module.exports = router;
