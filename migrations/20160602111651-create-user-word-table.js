'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('UserWords', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: Sequelize.INTEGER,
      userWord: Sequelize.STRING,
      personId: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('UserWords');
  }
};
