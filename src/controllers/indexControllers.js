const { renderTemplate } = require('../middlewares/renderTemplate');

const Home = require('../views/Home');

exports.renderHomePage = (req, res) => {
  const { user } = req.session;
  renderTemplate(Home, { user }, res);
};
