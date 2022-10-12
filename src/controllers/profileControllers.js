const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { renderTemplate } = require('../middlewares/renderTemplate');

const { User, Book } = require('../db/models');

const Profile = require('../views/Profile/Profile');
const ProfileBooks = require('../views/Profile/ProfileBooks');

exports.renderProfile = async (req, res) => {
  const { user } = req.session;

  const userInfo = await User.findByPk(user.id);

  renderTemplate(Profile, { user, userInfo }, res);
};

exports.updateProfile = async (req, res) => {
  const { userName, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const { user, userInfo } = req;

  await User.update({
    nickname: userName,
    email,
    password: hash,
  }, {
    where: { id: req.session.user.id },
    returning: true,
    plain: true,
  });
  const success = 'Profile updated successfully';
  renderTemplate(Profile, { user, userInfo, success }, res);
};

exports.renderBooks = async (req, res) => {
  const { user } = req.session;
  const books = await Book.findAll({ raw: true, where: { userID: user.id }, order: [['createdAt', 'DESC']] });
  renderTemplate(ProfileBooks, { user, books }, res);
};

exports.searchBooks = async (req, res) => {
  const { searchQuery } = req.query;
  const books = await Book.findAll({
    raw: true,
    where: {
      title: { [Op.iLike]: `%${searchQuery}%` },
      userID: req.session.user.id,
    },
  });
  res.json(books);
};
