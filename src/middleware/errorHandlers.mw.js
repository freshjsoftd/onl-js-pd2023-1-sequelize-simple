const {
	Sequelize: { BaseError },
} = require('../db/models');
const { ValidationError } = require('yup');
module.exports.validationErrorHandler = (err, req, res, next) => {
	if (err instanceof ValidationError) {
		return res.status(400).send({
			errors: [{ title: 'Validation Error', details: err.errors }],
		});
	}
	next(err);
};

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
	if (err instanceof BaseError) {
		return res.status(406).send({
			errors: [{ title: 'Sequelize Error', details: err.errors }],
		});
	}
	next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
	// Check sending on client
	if (res.headersSent) {
		return;
	}
	if (!err) {
		next();
	} else {
		res.status(err.status ?? 500).send({
			errors: [{ title: err.message ?? `Internal server error` }],
		});
	}
};
