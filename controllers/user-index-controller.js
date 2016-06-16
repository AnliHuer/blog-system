var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var User = models.User;
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;


function UserIndexController() {
}

UserIndexController.prototype.displayPage = function (req, res) {
    var user = req.cookies;
    var blogList = [];

    User.findOne({
        where: {
            userEmail: user.userEmail,
        }
    }).then(function (user) {
        if (user !== null) {
            BlogDetail.findAll({
                where: {
                    userId: user.dataValues.id
                }
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
                            blogList.push({
                                blogDetail: blogDetail,
                                blogTag: blogTag,
                                blogMessage: blogMessage,
                                user: user
                            });
                        });
                    });
                })

                setTimeout(function () {
                    res.render('user-index', {user: user, blogList: blogList});
                }, 300);
            });
        } else {
            res.render('user-index', {user: null, blogList: []});
        }
    });

}

module.exports = UserIndexController;
