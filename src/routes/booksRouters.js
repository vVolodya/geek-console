const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const booksControllers = require('../controllers/booksControllers');
const isAuth = require('../middlewares/isAuth');

router.route('/')
  .get(booksControllers.renderBooksPage)
  .post(catchErrors(booksControllers.getBooks));

router.route('/new-form')
  .get(isAuth, booksControllers.renderNewBookForm)
  .post(catchErrors(booksControllers.addYourOwnBook));

router.route('/new')
  .post(catchErrors(booksControllers.addBook));

router.route('/:id')
  .get(isAuth, booksControllers.renderBookPage)
  .post(isAuth, catchErrors(booksControllers.updateBook))
  .delete(catchErrors(booksControllers.removeBook));

module.exports = router;
