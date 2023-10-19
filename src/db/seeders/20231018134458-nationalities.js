'use strict';

const { nationalities } = require('../../constants/db-start-info');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('nationalities', nationalities, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('nationalities', null, {});
	},
};
