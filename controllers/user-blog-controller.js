var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var buildBlogTags = require('./buildBlogTags');
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;
var User = models.User;

function UserBlogController() {
}


function getBlogTags(userId) {
    var blogTagList = [];

    BlogTag.findAll({
        where: {
            userId: userId
        }
    }).then(function (blogTags) {
        blogTags.forEach(function (blogTag) {
            blogTagList.push({id: blogTag.dataValues.id, tag: blogTag.dataValues.tag});
        })
    });

    return blogTagList;
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

            var blogTags = getBlogTags(id);
            setTimeout(function () {
                res.render('user-blog', {blogList: blogList, user: user, blogTags: blogTags});
            }, 300);
        });
    });
}

UserBlogController.prototype.search = function (req, res) {
    var userId = req.cookies.userId;
    var blogList = [];

    BlogDetail.findAll({
        where: {
            userId: userId
        }
    }).then(function (blogDetails) {
        blogDetails.forEach(function (blogDetail) {
            blogList.push({
                blogDetail: formatBlogDetail(blogDetail)
            });
        });

        setTimeout(function () {
            res.send({blogList: blogList});
        }, 100);
    });

}


module.exports = UserBlogController;
