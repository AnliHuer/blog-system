'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('BlogMessages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      blogDetailId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      message: Sequelize.TEXT,
      createdAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('BlogMessages');
  }
};
