var express = require('express');
var router = express.Router();

var UserBlogDetailController = require('../../controllers/user-blog-detail-controller');
var UserBlogDetailController = new UserBlogDetailController();

router.get('/', UserBlogDetailController.displayPage);

router.post('/add-word', UserBlogDetailController.addWord);

module.exports = router;
