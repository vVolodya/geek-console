const bcrypt = require('bcrypt');
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
  req.session.user = {
    id: req.user.id,
    nickname: req.user.nickname,
    email: req.user.email,
  };
  req.session.save(() => res.redirect('/profile/books'));
};

exports.userLogout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('session');
    res.redirect('/');
  });
};
