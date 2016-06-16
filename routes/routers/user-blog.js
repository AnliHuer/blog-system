var express = require('express');
var router = express.Router();

var UserBlogController = require('../../controllers/user-blog-controller');
var UserBlogController = new UserBlogController();

router.get('/', UserBlogController.displayPage);

router.get('/search', UserBlogController.search);

module.exports = router;
