var models = require('../models');
var formatUserWord = require('./formatUserWord');
var UserWord = models.UserWord;
var User = models.User;

function UserWordController() {
}

UserWordController.prototype.getAllWord = function (req, res) {
    var personId = req.cookies.userId;
    var returnData = [];

    UserWord.findAll({
        where: {
            personId: personId
        }
    }).then(function (userWords) {
        userWords.forEach(function (userWord) {

            User.findOne({
                where: {
                    id: userWord.dataValues.userId
                }
            }).then(function (user) {
                console.log(user);

                returnData.push({user: user, userWord: formatUserWord(userWord)});
            });
        })

        setTimeout(function () {
            res.render('user-word', {userWords: returnData, person: req.cookies});
        }, 300);
    });
}

module.exports = UserWordController;
