'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer.hasMany(models.order, {
			foreignKey: 'customer_id',
			onDelete: 'CASCADE',
		});
    }
  }
  customer.init(
		{
			full_name: DataTypes.STRING,
			email: DataTypes.STRING,
			phone: DataTypes.STRING,
			password: {
				type: DataTypes.STRING,
        set(value){
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        }
			},
		},
		{
			sequelize,
			modelName: 'customer',
			// timestamps: false,
		}
  );
  return customer;
};