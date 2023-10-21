'use strict';
const { authors } = require('../../constants/db-start-info');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('authors', authors, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('authors', null, {});
	},
};
