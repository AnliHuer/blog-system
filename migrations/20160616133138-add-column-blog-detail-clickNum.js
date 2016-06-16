'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'BlogDetails',
        'clickNum', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('BlogDetails', 'clickNum');
  }
};
