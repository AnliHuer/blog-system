var express = require('express');
var router = express.Router();

var UserNewBlogController = require('../../controllers/user-new-blog-controller');
var UserNewBlogController = new UserNewBlogController();

router.get('/', UserNewBlogController.displayPage);

module.exports = router;
