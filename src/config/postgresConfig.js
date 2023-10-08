module.exports = {
	development: {
		username: 'postgres',
		password: 'root',
		database: 'cars',
		host: '127.0.0.1',
		dialect: 'postgres',
    migrationStorage: "json",
		define: {
			freezeTableName: true,
      timestumps: false,
      underscored: true
		},
	},
	test: {
		/* "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres" */
	},
	production: {
		/* "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres" */
	},
};
