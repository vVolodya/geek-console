const { renderTemplate } = require('../middlewares/renderTemplate');

const { Book } = require('../db/models');

const Books = require('../views/Books/Books');
const NewBookForm = require('../views/Books/NewBookForm');
const BookDetails = require('../views/Books/BookDetails');
const EditBookForm = require('../views/Books/EditBookForm');

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

  const cleanDesc = req.body.volumeInfo.description
    ? req.body.volumeInfo.description.replaceAll(/<[^>]*>/g, '').trim()
    : null;

  await Book.create({
    title: req.body.volumeInfo.title,
    photo: req.body.volumeInfo.imageLinks?.thumbnail,
    author,
    year: Number(req.body.volumeInfo.publishedDate.split('-')[0]),
    googleID: req.body.id,
    userID: user.id,
    url: req.body.volumeInfo.infoLink,
    desc: cleanDesc,
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
    title, author, year, url, comment, desc,
  } = req.body;

  const { user } = req.session;

  await Book.create({
    title,
    photo: url,
    author,
    year,
    desc,
    comment,
    userID: user.id,
  });

  res.redirect('/profile/books');
};

exports.renderBookPage = async (req, res) => {
  const book = req.bookObj;
  const { user } = req.session;
  renderTemplate(BookDetails, { user, book }, res);
};

exports.renderEditBookForm = async (req, res) => {
  const { user } = req.session;
  const book = req.bookObj;
  renderTemplate(EditBookForm, { user, book }, res);
};

exports.updateBook = async (req, res) => {
  const {
    title, author, year, photo, url, comment, desc,
  } = req.body;

  await Book.update({
    title,
    author,
    photo,
    url,
    year,
    desc,
    comment,
  }, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  });

  res.redirect(`/books/${req.params.id}`);
};
