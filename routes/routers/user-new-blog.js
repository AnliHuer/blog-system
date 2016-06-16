var express = require('express');
var router = express.Router();

var UserNewBlogController = require('../../controllers/user-new-blog-controller');
var UserNewBlogController = new UserNewBlogController();

router.get('/', UserNewBlogController.displayPage);

router.post('/save-blog',UserNewBlogController.saveBlog);

router.get('/get-tag',UserNewBlogController.getTag);

module.exports = router;
