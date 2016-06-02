var express = require('express');
var router = express.Router();

var UserBlogTagController = require('../../controllers/user-blog-tag-controller');
var UserBlogTagController = new UserBlogTagController();

router.get('/', UserBlogTagController.getBlogsByTag);

module.exports = router;
