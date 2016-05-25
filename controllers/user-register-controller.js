var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;

function UserRegisterController() {
}

UserRegisterController.prototype.displayPage = function (req, res) {
    res.render('user-register');
}

UserRegisterController.prototype.add = function (req, res) {
    var user = req.body;

    User.findAll({
        where: {
            userEmail: user.userEmail,
        }
    }).then(function (data) {
        console.log(data);

        if (data.length !== 0) {
            res.send({
                message: 'fail'
            });
        } else {
            User.create({
                userName: user.userName,
                userRole: user.userRole,
                userEmail: user.userEmail,
                userPassword: user.userPassword,
                userPhone: user.userPhone,
                userCareer: user.userCareer,
                userLog: user.userLog
            }).then(function (data) {
                if (data.length !== 0) {
                    res.send({
                        status: CONSTANT.OK,
                        message: 'success',
                        data: data.dataValues
                    });
                } else {
                    res.send({
                        message: 'fail'
                    });
                }
            });
        }
    });
}


module.exports = UserRegisterController;
