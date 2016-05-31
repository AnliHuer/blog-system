'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'BlogDetails',
        'blogName', {
          type: Sequelize.STRING,
          allowNull: false
        }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('BlogDetails', 'blogName');
  }
};
