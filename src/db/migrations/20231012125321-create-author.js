'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		full_name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		nationality_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'nationalities',
				key: 'id'
			}
		},
		createdAt: {
			// allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			// allowNull: false,
			type: Sequelize.DATE,
		},
	});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('authors');
  }
};