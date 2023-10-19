'use strict';
const { shelves } = require('../../constants/db-start-info');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		
		 await queryInterface.bulkInsert('shelves', shelves, {});
		
	},

	async down(queryInterface, Sequelize) {
		
		  await queryInterface.bulkDelete('shelves', null, {});
		 
	},
};
