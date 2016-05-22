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
        if (data.length !== 0) {

            res.cookie('userId', data[0].dataValues.id,{
                expires: new Date(Date.now() + 900000),
                path:'/'
            });
            res.cookie('userEmail', data[0].dataValues.userEmail,{
                expires: new Date(Date.now() + 900000),
                path:'/'
            });
            res.cookie('userPassword', data[0].dataValues.userPassword,{
                expires: new Date(Date.now() + 900000),
                path:'/'
            });

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
