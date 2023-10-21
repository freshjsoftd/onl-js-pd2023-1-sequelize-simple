'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders_books', {
		/* id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, */
		orderId: {
			type: Sequelize.INTEGER,
			references: {
				model: 'orders',
				key: 'id',
			},
		},
		bookId: {
			type: Sequelize.INTEGER,
			references: {
				model: 'books',
				key: 'id',
			},
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders_books');
  }
};