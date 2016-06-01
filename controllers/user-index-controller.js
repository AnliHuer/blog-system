var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;
var Blogmessage = models.BlogMessage;
var BlogDetail = models.BlogDetail;
var BlogTag = models.BlogTag;

function UserIndexController() {
}

function formatDate(data) {
    var date = data.getDate() < 10 ? "0" + data.getDate() : data.getDate().toString();
    var month = data.getMonth() < 10 ? "0" + (data.getMonth() + 1 ) : (data.getMonth() + 1).toString();
    var year = data.getFullYear().toString();

    return (date + '/' + month + '/' + year);
}

function formatBlogDetail(blogDetail) {
    return {
        id: blogDetail.id,
        blogTagId: blogDetail.blogTagId,
        userId: blogDetail.userId,
        content: blogDetail.content,
        createdAt: formatDate(blogDetail.createdAt),
        updatedAt: formatDate(blogDetail.updatedAt),
        blogName: blogDetail.blogName
    }
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
                var blog = {};

                blogDetails.forEach(function (blogDetail) {
                    blogDetail = formatBlogDetail(blogDetail);
                    
                    BlogTag.findOne({
                        where: {
                            id: blogDetail.blogTagId
                        }
                    }).then(function (blogTag) {
                        blogList.push({blogDetail: blogDetail, blogTag: blogTag, user: user});
                    });
                })

                res.render('user-index', {user: user, blogList: blogList});
            });

        } else {
            res.render('user-index', {user: null, blogList: []});
        }
    });

}

module.exports = UserIndexController;
