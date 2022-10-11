const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const profileControllers = require('../controllers/profileControllers');
const isAuth = require('../middlewares/isAuth');

router.route('/')
  .get(isAuth, profileControllers.renderProfile)
  .post(catchErrors(profileControllers.updateProfile));

router.get('/books', profileControllers.renderBooks);
router.get('/books/search', profileControllers.searchBooks);
module.exports = router;
