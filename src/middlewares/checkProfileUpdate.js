const { renderTemplate } = require('./renderTemplate');

const { User } = require('../db/models');

const Profile = require('../views/Profile/Profile');

exports.passCheck = async (req, res, next) => {
  const { user } = req.session;
  const { password, repeatPassword } = req.body;

  const userInfo = await User.findByPk(user.id);

  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  if (password !== repeatPassword) {
    const error = 'Passwords do not match';
    renderTemplate(Profile, { user, userInfo, error }, res);
  } else if (!regex.test(password)) {
    const error = 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character';
    renderTemplate(Profile, { user, userInfo, error }, res);
  } else {
    req.user = user;
    req.userInfo = userInfo;
    next();
  }
};
