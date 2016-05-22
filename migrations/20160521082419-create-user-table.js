'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userRole: Sequelize.STRING,
            userName: Sequelize.STRING,
            userEmail: Sequelize.STRING,
            userPhone: Sequelize.STRING,
            userImage: Sequelize.BLOB,
            userPassword: Sequelize.STRING,
            userCareer: Sequelize.STRING,
            userLog: Sequelize.STRING,
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('Users');
    }
};
