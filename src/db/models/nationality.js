'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nationality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nationality.init(
		{
			title: {
				type: DataTypes.STRING,
				get() {
					const rawValue = this.getDataValue(title);
					return rawValue ? rawValue.toUpperCase()  : null;
				},
			},
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'nationality',
			// timestamps: false,
		}
  );
  return nationality;
};