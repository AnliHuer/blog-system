var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var buildBlogTags = require('./buildBlogTags');
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;
var User = models.User;

function UserBlogController() {
}

UserBlogController.prototype.displayPage = function (req, res) {
    var id = req.cookies.userId;
    var blogList = [];

    User.findOne({
        where: {
            id: id
        }
    }).then(function (user) {
        BlogDetail.findAll({
            where: {
                userId: id
            }
        }).then(function (blogDetails) {
            blogDetails.forEach(function (blogDetail) {
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
                        blogList.push({
                            blogDetail: formatBlogDetail(blogDetail),
                            blogTag: blogTag,
                            blogMessages: blogMessages,
                        });
                    });
                });
            });

            setTimeout(function () {
                res.render('user-blog', {blogList: blogList, user: user, blogTags: buildBlogTags(blogList)});
            }, 300);
        });
    });
}

module.exports = UserBlogController;
