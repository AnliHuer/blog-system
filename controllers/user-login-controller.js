var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;

function UserLoginController() {
}

UserLoginController.prototype.displayPage = function (req, res) {
    res.render('user-login');
}

UserLoginController.prototype.onValidate = function (req, res) {
    var user = req.body;
  
    User.findAll({
        where: {
            userEmail: user.userEmail,
            userPassword: user.userPassword
        }
    }).then(function (data) {
        console.log(data);
        if (data.length !== 0) {
            res.send({
                status: CONSTANT.OK,
                message: 'success',
                data: data.dataValues
            });
        } else {
            res.send({
                status: CONSTANT.NOT_FOUND,
                message: 'fail'
            });
        }
    });
};


module.exports = UserLoginController;
