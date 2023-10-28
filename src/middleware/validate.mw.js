// import createError from 'http-errors';
const createError = require('http-errors');
import {
	NEW_BOOK_VALIDATION_SCHEMA,
	PATCH_BOOK_VALIDATION_SCHEMA,
} from '../utils/validationSchemas';

//  WITH ASYNC/AWAIT
export const validateNewBook = async (req, res, next) => {
	const { body } = req;
	try {
		await NEW_BOOK_VALIDATION_SCHEMA.validate(body, { abortEarly: false });
		next();
	} catch (error) {
		next(error);
	}
};

export const validatePatchedBook = async (req, res, next) => {
	const { body } = req;
	if (await PATCH_BOOK_VALIDATION_SCHEMA.isValid(body)) {
		return next();
	}
		next(createError(400, 'Validation error'));
};

// WITH PROMICES
/* export const validateNewBook = (req, res, next) => {
const { body } = req;
NEW_BOOK_VALIDATION_SCHEMA.validate(body) //async method
	.then((validatedBook) => {
		req.body = validatedBook;
		next();
	})
	.catch((err) => {
		res.status(500).send(err.message);
	});
} */
