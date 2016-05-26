'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('BlogDetails', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            blogTagId: Sequelize.INTEGER,
            userId: Sequelize.INTEGER,
            content: Sequelize.TEXT,
            blogImage: Sequelize.BLOB,
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('BlogDetails');
    }
};
