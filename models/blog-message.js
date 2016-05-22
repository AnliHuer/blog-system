module.exports = function(sequelize, DataTypes) {
    var BlogMessage = sequelize.define('BlogMessage', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        blogDetailId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        message: DataTypes.TEXT,
    });
    return BlogMessage;
};
