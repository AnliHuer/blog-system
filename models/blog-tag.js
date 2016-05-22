module.exports = function (sequelize, DataTypes) {
    var BlogTag = sequelize.define('BlogTag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tag: DataTypes.STRING,
        userId: DataTypes.INTEGER
    });
    return BlogTag;
};
