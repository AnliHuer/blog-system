var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var User = models.User;
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;


function UserIndexController() {
}

UserIndexController.prototype.displayPage = function (req, res) {
    var blogList = [];
    var blogs = [];

    User.findOne({
        where: {
            userEmail: req.cookies.userEmail
        }
    }).then(function (user) {
        BlogDetail.findAll({
            'order': [
                ['clickNum', 'DESC'],
            ],
            'limit': 10
        }).then(function (blogDetails) {

            blogDetails.forEach(function (blogDetail) {
                blogDetail = formatBlogDetail(blogDetail);

                BlogTag.findOne({
                    where: {
                        id: blogDetail.blogTagId
                    }
                }).then(function (blogTag) {

                    Blogmessage.findAll({
                        where: {
                            blogDetailId: blogDetail.id
                        }
                    }).then(function (blogMessage) {
                        User.findOne({
                            where: {
                                id: blogDetail.userId
                            }
                        }).then(function (user) {
                            blogList.push({
                                blogDetail: blogDetail,
                                blogTag: blogTag,
                                blogMessage: blogMessage,
                                user: user
                            });
                        });
                    });
                });
            });

        });

        BlogDetail.findAll({
            'order': [
                ['id', 'DESC'],
            ],
            'limit': 10
        }).then(function (blogDetailList) {

            blogDetailList.forEach(function (blog) {
                blog = formatBlogDetail(blog);

                BlogTag.findOne({
                    where: {
                        id: blog.blogTagId
                    }
                }).then(function (blogTag) {

                    Blogmessage.findAll({
                        where: {
                            blogDetailId: blog.id
                        }
                    }).then(function (blogMessage) {
                        blogs.push({
                            blogDetail: blog,
                            blogTag: blogTag,
                            blogMessage: blogMessage
                        });
                    });
                });
            });
        });

        setTimeout(function () {
            res.render('user-index', {user: user, blogList: blogList, blogs: blogs});
        }, 300)
    });


}

module.exports = UserIndexController;
