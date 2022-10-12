const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const booksControllers = require('../controllers/booksControllers');
const isAuth = require('../middlewares/isAuth');
const isOwner = require('../middlewares/isOwner');

router.route('/')
  .get(booksControllers.renderBooksPage)
  .post(catchErrors(booksControllers.getBooks));

router.route('/new-form')
  .get(isAuth, booksControllers.renderNewBookForm)
  .post(isAuth, catchErrors(booksControllers.addYourOwnBook));

router.route('/new')
  .post(isAuth, catchErrors(booksControllers.addBook));

router.route('/book-form/:id')
  .get(isAuth, catchErrors(isOwner), booksControllers.renderEditBookForm)
  .post(isAuth, catchErrors(isOwner), catchErrors(booksControllers.updateBook));

router.route('/:id')
  .get(isAuth, catchErrors(isOwner), booksControllers.renderBookPage)
  .delete(isAuth, catchErrors(isOwner), catchErrors(booksControllers.removeBook));

module.exports = router;
