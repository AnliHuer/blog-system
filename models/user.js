module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userRole: DataTypes.STRING,
        userName: DataTypes.STRING,
        userEmail: DataTypes.STRING,
        userPhone: DataTypes.STRING,
        userImage: DataTypes.BLOB,
        userPassword: DataTypes.STRING,
        userCareer: DataTypes.STRING,
        userLog: DataTypes.STRING
    });
    return User;
};
