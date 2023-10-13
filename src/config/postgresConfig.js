module.exports = {
	development: {
		username: 'postgres',
		password: 'root',
		database: 'library',
		host: '127.0.0.1',
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
