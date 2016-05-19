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
        if (data.length !== 0) {
            res.send({
                message: 'fail'
            });
        } else {
            User.create({
                userEmail: user.userEmail,
                userPassword: user.userPassword
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
