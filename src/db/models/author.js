'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
			author.belongsTo(models.nationality, {foreignKey: 'nationality_id'})
			author.belongsToMany(models.book, {
				through: models.authors_books,
				// timestamps: false,
			});
    }
  }
  author.init(
		{
			full_name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					is: /^[A-Z]\w+$/,
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			nationality_id: {
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: 'author',
			// timestamps: false,
		}
  );
  return author;
};