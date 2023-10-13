'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.addConstraint('shelves', {
			fields: ['title'],
			type: 'unique',
		});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.removeConstraint('shelves');
    
  }
};
