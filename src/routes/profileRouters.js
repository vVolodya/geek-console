const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const profileControllers = require('../controllers/profileControllers');
const isAuth = require('../middlewares/isAuth');
const { passCheck } = require('../middlewares/checkProfileUpdate');

router.route('/')
  .get(isAuth, profileControllers.renderProfile)
  .post(isAuth, catchErrors(passCheck), catchErrors(profileControllers.updateProfile));

router.get('/books', isAuth, profileControllers.renderBooks);
router.get('/books/search', isAuth, profileControllers.searchBooks);

module.exports = router;
