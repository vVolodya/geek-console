const createError = require('http-errors');
const { Book } = require('../db/models');

module.exports = async function isOwner(req, res, next) {
  const book = await Book.findByPk(req.params.id);

  if (book.userID !== req.session.user.id) {
    throw createError(404, 'Not found');
  } else {
    req.bookObj = book;
    next();
  }
};
