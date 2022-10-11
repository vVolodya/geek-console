const { renderTemplate } = require('../middlewares/renderTemplate');

const { User, Book } = require('../db/models');

const Profile = require('../views/Profile');
const ProfileBooks = require('../views/ProfileBooks');

exports.renderProfile = async (req, res) => {
  const { user } = req.session;

  const userInfo = await User.findByPk(user.id);

  renderTemplate(Profile, { user, userInfo }, res);
};

exports.updateProfile = async (req, res) => {
  const { user } = req.session;
  const { userName, email } = req.body;

  await User.update({
    nickname: userName,
    email,
  }, {
    where: { id: user.id },
    returning: true,
    plain: true,
  });
  res.redirect('/profile');
};

exports.renderBooks = async (req, res) => {
  const { user } = req.session;
  const books = await Book.findAll({ raw: true, where: { userID: user.id } });
  renderTemplate(ProfileBooks, { user, books }, res);
};
