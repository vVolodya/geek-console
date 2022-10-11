const router = require('express').Router();

const booksControllers = require('../controllers/booksControllers');

router.route('/')
  .get(booksControllers.renderBooksPage)
  .post(booksControllers.getBooks);

router.route('/new')
  .post(booksControllers.addBook);

router.delete('/:id', booksControllers.removeBook);

module.exports = router;
