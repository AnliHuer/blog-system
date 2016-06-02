var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;
var User = models.User;

function UserBlogController() {
}

function isNotExist(tag, blogTags) {
    var flag = 'true';

    blogTags.forEach(function (blogTag) {
        if (tag === blogTag) {
            flag === 'false';
        }
    })

    return flag;
}

function buildBlogTag(blogList) {
    var blogTags = [];

    for (var i = 0; i < blogList.length; i++) {
        if (isNotExist(blogList[i].blogTag.tag, blogTags)) {
            blogTags.push({id: blogList[i].blogTag.id, tag: blogList[i].blogTag.tag});
        }
    }

    return blogTags;
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
                res.render('user-blog', {blogList: blogList, user: user, blogTags: buildBlogTag(blogList)});
            }, 300);
        });
    });
}

module.exports = UserBlogController;
