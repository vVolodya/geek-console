const router = require('express').Router();

const booksControllers = require('../controllers/booksControllers');

router.route('/')
  .get(booksControllers.renderBooksPage)
  .post(booksControllers.getBooks);

router.route('/new')
  .post(booksControllers.addBook);

module.exports = router;
