var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;

function UserAboutController() {
}

UserAboutController.prototype.displayPage = function (req, res) {
    res.render('user-about', {cookie: req.cookies});
}

UserAboutController.prototype.updateUserInfo = function (req, res) {
    var user = req.body;

    User.update({
        userName: user.userName,
        userPhone: user.userPhone,
        userCareer: user.userCareer,
        userLog: user.userLog
    }, {
        where: {
            userEmail: req.cookies.userEmail,
        }
    }).then(function (data) {
        if (data[0] !== 0) {
            res.cookie('userName', user.userName,{
                expires: new Date(Date.now() + 900000),
                path:'/'
            });
            res.cookie('userPhone', user.userPhone,{
                expires: new Date(Date.now() + 900000),
                path:'/'
            });
            res.cookie('userCareer', user.userCareer,{
                expires: new Date(Date.now() + 900000),
                path:'/'
            });
            res.cookie('userLog', user.userLog,{
                expires: new Date(Date.now() + 900000),
                path:'/'
            });

            res.send({
                status: CONSTANT.OK,
                message: 'success',
            });
        } else {
            res.send({
                status: CONSTANT.NOT_FOUND,
                message: 'fail'
            });
        }
    });
};


module.exports = UserAboutController;
