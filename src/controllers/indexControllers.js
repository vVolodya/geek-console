const { renderTemplate } = require('../middlewares/renderTemplate');

const Home = require('../views/Home');

exports.renderHomePage = (req, res) => {
  renderTemplate(Home, null, res);
};