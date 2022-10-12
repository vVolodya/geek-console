const createError = require('http-errors');
const { renderTemplate } = require('./renderTemplate');
const Error = require('../views/Errors/Errors');
const NotFound = require('../views/Errors/404');

exports.catchErrors = (fn) => function (req, res, next) {
  return fn(req, res, next).catch(next);
};

exports.notFound = (req, res) => {
  const { user } = req.session;
  renderTemplate(NotFound, { user }, res);
};

exports.developmentErrors = async (err, req, res, next) => {
  const error = err;

  const errorDetails = {
    message: error.message,
    status: error.status,
    stackHighlited: error.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
  };

  res.status(error.status || 500);

  res.format({
    'text/html': () => renderTemplate(Error, { errorDetails }, res),
    'application/json': () => res.json(errorDetails),
  });
};

exports.productionErrors = async (err, req, res, next) => {
  const error = err;

  res.status(error.status || 500);

  const errorDetails = {
    message: error.message,
    status: error.status,
  };

  renderTemplate(Error, { errorDetails }, res);
};
