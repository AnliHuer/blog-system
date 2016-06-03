var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;

function UserNewBlogController() {
}

UserNewBlogController.prototype.displayPage = function (req, res) {
    res.render('user-new-blog',{user: req.cookies});
}


module.exports = UserNewBlogController;
