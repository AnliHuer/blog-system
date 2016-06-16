module.exports = function (sequelize, DataTypes) {
    var BlogDetail = sequelize.define('BlogDetail', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        blogTagId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        content: DataTypes.TEXT,
        contentHtml: DataTypes.TEXT,
        blogName: DataTypes.STRING,
        blogImage: DataTypes.BLOB
    });
    return BlogDetail;
};
