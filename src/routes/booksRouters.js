const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const booksControllers = require('../controllers/booksControllers');

router.route('/')
  .get(booksControllers.renderBooksPage)
  .post(catchErrors(booksControllers.getBooks));

router.route('/new')
  .post(catchErrors(booksControllers.addBook));

router.delete('/:id', catchErrors(booksControllers.removeBook));

module.exports = router;
