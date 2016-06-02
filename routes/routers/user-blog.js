var express = require('express');
var router = express.Router();

var UserBlogController = require('../../controllers/user-blog-controller');
var UserBlogController = new UserBlogController();

router.get('/', UserBlogController.displayPage);

module.exports = router;
