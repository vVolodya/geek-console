const bcrypt = require('bcrypt');
const createError = require('http-errors');
const { renderTemplate } = require('../middlewares/renderTemplate');

const LoginForm = require('../views/Auth/LoginForm');
const SignupForm = require('../views/Auth/SignupForm');

const { User } = require('../db/models');

exports.renderLoginForm = (req, res) => {
  renderTemplate(LoginForm, null, res);
};

exports.renderSignupForm = (req, res) => {
  renderTemplate(SignupForm, null, res);
};

// ? @desc Register user
// ? @route POST /signup
// ? @access Public
exports.userSignup = async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);
  await User.create({
    email,
    nickname: email,
    password: hash,
  });

  res.redirect('/login');
};

// ? @desc Login user
// ? @route POST /login
// ? @access Public
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw createError(401, 'Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(isMatch) {
    req.session.userID = user.id;
    req.session.userEmail = user.email;
    req.session.save(() => res.redirect('/'));
  } else {
    throw createError(401, 'Invalid credentials');
  }
}