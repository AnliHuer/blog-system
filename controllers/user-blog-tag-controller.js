var models = require('../models');
var formatBlogDetail = require('./formatBlogDetail');
var BlogDetail = models.BlogDetail;

function UserBlogTagController() {
}

UserBlogTagController.prototype.getBlogsByTag = function (req, res) {
    var userId = req.cookies.userId;
    var blogTagId = req.query.blogTagId;
    var returnData = [];

    if(blogTagId === '0'){
        BlogDetail.findAll({
            where: {
                userId: userId
            }
        }).then(function (blogDetails) {
            blogDetails.forEach(function (blogDetail) {
                returnData.push(formatBlogDetail(blogDetail));
            })
            res.send({blogDetails: returnData})
        });
    }else{
        BlogDetail.findAll({
            where: {
                blogTagId: blogTagId,
                userId: userId
            }
        }).then(function (blogDetails) {
            blogDetails.forEach(function (blogDetail) {
                returnData.push(formatBlogDetail(blogDetail));
            })
            res.send({blogDetails: returnData})
        });
    }
}

module.exports = UserBlogTagController;
