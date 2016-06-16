'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'BlogDetails',
        'contentHtml', {
          type: Sequelize.TEXT,
          allowNull: false
        }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('BlogDetails', 'contentHtml');
  }
};
