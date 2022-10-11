const { renderTemplate } = require('../middlewares/renderTemplate');

const { Book } = require('../db/models');

const Books = require('../views/Books');

exports.renderBooksPage = (req, res) => {
  const { books, user } = req.session;
  renderTemplate(Books, { books, user }, res);
};

exports.getBooks = async (req, res) => {
  const { items } = req.body;
  req.session.books = items;
  res.status(200).end();
};

exports.addBook = async (req, res) => {
  const { user } = req.session;
  await Book.create({
    title: req.body.volumeInfo.title,
    photo: req.body.volumeInfo.imageLinks?.thumbnail,
    author: req.body.volumeInfo.authors[0],
    year: Number(req.body.volumeInfo.publishedDate.split('-')[0]),
    googleID: req.body.id,
    userID: user.id,
  });
  res.status(200).end();
};
