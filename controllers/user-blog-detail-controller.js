var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;
var User = models.User;
var BlogMessage = models.BlogMessage;

function UserBlogDetailController() {
}

UserBlogDetailController.prototype.displayPage = function (req, res) {
    var id = req.query.id;

    BlogDetail.findOne({
        where: {
            id: id
        }
    }).then(function (blogDetail) {
        var clickNum = blogDetail.clickNum + 1;
        BlogDetail.update({
            clickNum: clickNum
        }, {
            where: {
                id: id
            }
        }).then(function (data) {
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
                        var messageList = [];

                        blogMessages.forEach(function (blogMessage) {
                            User.findOne({
                                where: {
                                    id: blogMessage.userId
                                }
                            }).then(function (person) {
                                messageList.push({person: person, blogMessage: blogMessage});
                            });
                        });

                        setTimeout(function () {
                            res.render('user-blog-detail', {
                                blogDetail: formatBlogDetail(blogDetail),
                                blogTag: blogTag,
                                blogMessages: messageList,
                                person: req.cookies
                            });
                        }, 100);
                    });
                });
            });
        });
    });
}

UserBlogDetailController.prototype.addWord = function (req, res) {
    var blogDetailId = req.body.blogDetailId;
    var userId = req.cookies.userId;
    var message = req.body.message;

    BlogMessage.create({
        userId: userId,
        message: message,
        blogDetailId: blogDetailId
    }).then(function (data) {
        res.send({blogMessage: data.dataValues, user: req.cookies});
    });

}


module.exports = UserBlogDetailController;
