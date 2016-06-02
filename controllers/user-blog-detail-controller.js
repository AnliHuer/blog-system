var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;
var User = models.User;

function UserBlogDetailController() {
}

UserBlogDetailController.prototype.displayPage = function (req, res) {
    var id = req.query.id;

    BlogDetail.findOne({
        where: {
            id: id
        }
    }).then(function (blogDetail) {
        BlogTag.findOne({
            where: {
                id: blogDetail.blogTagId
            }
        }).then(function (blogTag) {
            Blogmessage.findAll({
                where: {
                    blogDetailId: id
                }
            }).then(function (blogMessages) {
                User.findOne({
                    where: {
                        id: blogDetail.userId
                    }
                }).then(function (user) {
                    res.render('user-blog-detail', {
                        blogDetail: formatBlogDetail(blogDetail),
                        blogTag: blogTag,
                        blogMessages: blogMessages,
                        user: user
                    });
                });
            });
        });
    });


}

module.exports = UserBlogDetailController;
