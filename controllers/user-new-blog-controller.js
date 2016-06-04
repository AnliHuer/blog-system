var models = require('../models');
var buildBlogTags = require('./buildBlogTags');
var User = models.User;
var BlogTag = models.BlogTag;
var BlogDetail = models.BlogDetail;

function UserNewBlogController() {
}

UserNewBlogController.prototype.displayPage = function (req, res) {
    var userId = req.cookies.userId;
    var blogList = [];

    User.findOne({
        where: {
            id: userId
        }
    }).then(function (user) {
        BlogDetail.findAll({
            where: {
                userId: userId
            }
        }).then(function (blogDetails) {
            blogDetails.forEach(function (blogDetail) {
                BlogTag.findOne({
                    where: {
                        id: blogDetail.blogTagId
                    }
                }).then(function (blogTag) {
                    blogList.push({blogDetail: blogDetail, blogTag: blogTag});
                })
            });
            setTimeout(function () {
                res.render('user-new-blog', {user: user, blogTags: buildBlogTags(blogList)});
            }, 100);
        });
    });
}


module.exports = UserNewBlogController;
