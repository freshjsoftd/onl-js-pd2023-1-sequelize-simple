'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shelf.hasMany(models.book, {
			foreignKey: 'shelf_id',
      onDelete: 'SET DEFAULT',
		});
    }
  }
  shelf.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'shelf',
			timestamps: false,
		}
  );
  return shelf;
};