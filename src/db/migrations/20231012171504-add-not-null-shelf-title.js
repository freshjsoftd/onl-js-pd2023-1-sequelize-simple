'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.removeColumn('shelves', 'title');
		await queryInterface.addColumn('shelves', 'title', 
    {
			type: Sequelize.STRING,
			allowNull: false
		}
    );
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('shelves');
	},
};
