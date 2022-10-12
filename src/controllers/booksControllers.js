const { renderTemplate } = require('../middlewares/renderTemplate');

const { Book } = require('../db/models');

const Books = require('../views/Books/Books');
const NewBookForm = require('../views/Books/NewBookForm');
const BookDetails = require('../views/Books/BookDetails');

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

  const author = req.body.volumeInfo.authors
    ? req.body.volumeInfo.authors[0]
    : null;

  await Book.create({
    title: req.body.volumeInfo.title,
    photo: req.body.volumeInfo.imageLinks?.thumbnail,
    author,
    year: Number(req.body.volumeInfo.publishedDate.split('-')[0]),
    googleID: req.body.id,
    userID: user.id,
    url: req.body.volumeInfo.infoLink,
    desc: req.body.volumeInfo.description || null,
  });
  res.status(200).end();
};

exports.removeBook = async (req, res) => {
  await Book.destroy({ where: { id: req.params.id } });
  res.status(200).end();
};

exports.renderNewBookForm = (req, res) => {
  const { books, user } = req.session;
  renderTemplate(NewBookForm, { books, user }, res);
};

exports.addYourOwnBook = async (req, res) => {
  const {
    title, author, year, url, comment,
  } = req.body;

  const { user } = req.session;

  await Book.create({
    title,
    photo: url,
    author,
    year,
    comment,
    userID: user.id,
  });

  res.redirect('/profile/books');
};

exports.renderBookPage = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  const { user } = req.session;
  renderTemplate(BookDetails, { user, book }, res);
};

exports.updateBook = async (req, res) => {

};
