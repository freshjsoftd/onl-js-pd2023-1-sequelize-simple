'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.belongsTo(models.genre, {foreignKey: 'genre_id'});
      book.belongsTo(models.shelf, { foreignKey: 'shelf_id' });
      book.belongsToMany(models.author, {
			through: models.authors_books,
			// timestamps: false,
		});
      book.belongsToMany(models.order, {
			through: models.orders_books,
			// timestamps: false,
		});
    }
  }
  book.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			image: DataTypes.STRING,
			genre_id: {
				type: DataTypes.INTEGER,
			},
			shelf_id: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'book',
			// timestamps: false,
		}
  );
  return book;
};