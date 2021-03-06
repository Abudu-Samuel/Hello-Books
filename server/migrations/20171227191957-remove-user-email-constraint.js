'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.addConstraint('Users', ['email'], {
      type: 'unique',
      name: 'email_unique'
    });
    queryInterface.addConstraint('Users', ['username'], {
      type: 'unique',
      name: 'username_unique'
    });
  },
  down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('Users' , 'email_unique')
    queryInterface.removeConstraint('Users' , 'username_unique')
  }
};
