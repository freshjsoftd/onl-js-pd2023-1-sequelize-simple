import { Router } from 'express';

import bookCtrl from '../controllers/bookControllers';
import { paginate, validate } from '../middleware';

const bookRouter = new Router();

bookRouter
	.route('/')
	.get(paginate.paginateBooks, bookCtrl.getBooks)
	.post(validate.validateNewBook, bookCtrl.createBook)
	.put(bookCtrl.updateBook);

bookRouter
	.route('/:id')
	.get(bookCtrl.getBookById)
	.delete(bookCtrl.deleteBook)
	.patch(validate.validatePatchedBook, bookCtrl.changePartOfBook);

export default bookRouter;