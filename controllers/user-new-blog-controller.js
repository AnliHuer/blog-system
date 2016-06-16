var models = require('../models');
var buildBlogTags = require('./buildBlogTags');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;
var BlogTag = models.BlogTag;
var BlogDetail = models.BlogDetail;

function UserNewBlogController() {
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

            var blogTags = getBlogTags(userId);
            setTimeout(function () {
                res.render('user-new-blog', {user: user, blogTags: blogTags});
            }, 100);
        });
    });
}


UserNewBlogController.prototype.saveBlog = function (req, res) {
    var user = req.cookies;
    var blogInfo = req.body;

    BlogTag.findOrCreate({
        where: {
            tag: blogInfo.blogTag,
            userId: user.userId
        }
    }).then(function (blogTag) {
        BlogDetail.create({
                blogTagId: blogTag[0].dataValues.id,
                blogName: blogInfo.blogName,
                content: blogInfo.content,
                contentHtml: blogInfo.contentHtml,
                userId: user.userId,
                clickNum: 0
            }
        ).then(function (data) {
            if (data.length !== 0) {
                res.send({
                    status: CONSTANT.OK,
                    message: 'success',
                    data: data.dataValues.id
                });
            } else {
                res.send({
                    message: 'fail'
                });
            }
        });
    });
}


UserNewBlogController.prototype.getTag = function (req, res) {
    var userId = req.cookies.userId;
    var blogTagList = [];

    BlogTag.findAll({
        where: {
            userId: userId
        }
    }).then(function (blogTags) {
        blogTags.forEach(function (blogTag) {

            blogTagList.push({id: blogTag.dataValues.id, tag: blogTag.dataValues.tag});
        });

        res.send({blogTags: blogTagList});
    });
}

module.exports = UserNewBlogController;
