var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;

function UserRegisterController() {}

UserRegisterController.prototype.displayPage = function(req, res){
    console.log('controller');
    res.render('user-register');
}

UserRegisterController.prototype.add = function(req, res) {
    var user = req.body;
    User.create({
        where: {
            userEmail: user.userEmail,
            userPassword: user.userPassword
        }
    }).then(function(data) {
        if (data !== null) {
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


module.exports = UserRegisterController;
