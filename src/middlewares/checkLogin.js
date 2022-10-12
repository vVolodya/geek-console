const bcrypt = require('bcrypt');
const { renderTemplate } = require('./renderTemplate');
const LoginForm = require('../views/Auth/LoginForm');
const { User } = require('../db/models');

exports.isCorrectEmail = async (req, res, next) => {
  const { email } = req.body;

  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser) {
    const error = 'Wrong password or email address';
    renderTemplate(LoginForm, { error }, res);
  } else {
    req.user = existingUser;
    next();
  }
};

exports.isCorrectPass = async (req, res, next) => {
  const { password } = req.body;

  const isMatch = await bcrypt.compare(password, req.user.password);

  if (!isMatch) {
    const error = 'Wrong password or email address';
    renderTemplate(LoginForm, { error }, res);
  } else {
    next();
  }
};
