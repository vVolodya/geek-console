const { renderTemplate } = require('./renderTemplate');
const Error = require('../views/Errors/Errors');
const NotFound = require('../views/Errors/404');

exports.catchErrors = (fn) => function (req, res, next) {
  return fn(req, res, next).catch(next);
};

exports.notFound = (req, res) => {
  const user = req.session.user ? req.session.user : null;
  renderTemplate(NotFound, { user }, res);
};

exports.developmentErrors = async (err, req, res, next) => {
  const user = req.session.user ? req.session.user : null;
  const error = err;

  const errorDetails = {
    message: error.message,
    status: error.status,
    stackHighlited: error.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
  };

  res.status(error.status || 500);

  res.format({
    'text/html': () => renderTemplate(Error, { user, errorDetails }, res),
    'application/json': () => res.json(errorDetails),
  });
};

exports.productionErrors = async (err, req, res, next) => {
  const user = req.session.user ? req.session.user : null;
  const error = err;

  res.status(error.status || 500);

  const errorDetails = {
    message: error.message,
    status: error.status,
  };

  renderTemplate(Error, { user, errorDetails }, res);
};
