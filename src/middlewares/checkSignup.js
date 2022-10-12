const { renderTemplate } = require('./renderTemplate');

const SignupForm = require('../views/Auth/SignupForm');

const { User } = require('../db/models');

exports.isValidPass = (req, res, next) => {
  const { password } = req.body;

  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const isValidPass = regex.test(password);

  if (!isValidPass) {
    const error = 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character';
    renderTemplate(SignupForm, { error }, res);
  } else {
    next();
  }
};

exports.userExists = async (req, res, next) => {
  const { email } = req.body;

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    const error = 'User with this email already exists';
    renderTemplate(SignupForm, { error }, res);
  } else {
    next();
  }
};
