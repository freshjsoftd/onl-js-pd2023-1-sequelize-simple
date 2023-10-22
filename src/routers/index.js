import { Router } from 'express';

import bookRouters from './bookRouters';

const router = new Router();

router.use('/books', bookRouters);


export default router;
