module.exports = function (sequelize, DataTypes) {
    var UserWord = sequelize.define('UserWord', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: DataTypes.INTEGER,
        userWord: DataTypes.STRING,
        personId: DataTypes.INTEGER
    });
    return UserWord;
};
