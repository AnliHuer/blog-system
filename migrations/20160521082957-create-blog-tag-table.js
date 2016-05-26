'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('BlogTags', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tag: Sequelize.STRING,
      userId: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('BlogTags');
  }
};
