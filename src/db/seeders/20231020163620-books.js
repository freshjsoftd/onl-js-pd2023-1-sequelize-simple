'use strict';

const { books } = require('../../constants/db-start-info');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		
		  
		  await queryInterface.bulkInsert('books', books, {});
		
	},

	async down(queryInterface, Sequelize) {
		
		  await queryInterface.bulkDelete('books', null, {});
		
	},
};
