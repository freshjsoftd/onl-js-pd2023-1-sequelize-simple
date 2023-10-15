require('dotenv/config');

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'postgres',
		migrationStorage: 'json',
		seederStorage: 'json',
	},
	test: {
		/* "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
		define: {
			freezeTableName: true,
			timestumps: false,
			underscored: true,
		},
		*/
	},
	production: {
		/* "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres" */
	},
};

/* Для реализации этих связей у класса Model есть ряд методов:
    - для реализации связи One-To-One используется пара методов hasOne() для источника (source) и 
      belongsTo() для целевой модели (target). Внешний ключ находится в целевой модели.
    - для реализации связи One-To-Many используется пара методов hasMany() для источника (source) и 
      belongsTo() для целевой модели (target). Внешний ключ находится в целевой модели.
    - для реализации связи Many-To-Many используется метод belongsToMany() в обоих моделях. */
