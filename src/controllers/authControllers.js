const { renderTemplate } = require('../middlewares/renderTemplate');

const LoginForm = require('../views/Auth/LoginForm');

exports.renderLoginForm = (req, res) => {
  renderTemplate(LoginForm, null, res);
};