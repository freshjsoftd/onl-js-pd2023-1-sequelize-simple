'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			order.belongsTo(models.customer, { foreignKey: 'customer_id' });
			order.belongsToMany(models.book, {
				through: models.orders_books,
				// timestamps: false,
			});
		}
	}
	order.init(
		{
			title: DataTypes.STRING,
			order_date: DataTypes.DATEONLY,
			customer_id: {
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: 'order',
			// timestamps: false,
		}
	);
	return order;
};
