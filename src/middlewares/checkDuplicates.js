const { Book } = require('../db/models');

module.exports = async function checkDuplicates(req, res, next) {
  const duplicates = await Book.findOne({
    raw: true,
    where: {
      googleID: req.body.id,
      userID: req.session.user.id,
    },
  });

  if (duplicates) {
    res.status(400).end();
  } else {
    next();
  }
};
