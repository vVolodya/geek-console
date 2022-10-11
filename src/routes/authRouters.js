const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const authControllers = require('../controllers/authControllers');
const isNotLoggedIn = require('../middlewares/isNotLoggedIn');
const { isValidPass, userExists } = require('../middlewares/checkSignup');
const { isCorrectEmail, isCorrectPass } = require('../middlewares/checkLogin');

router.route('/login')
  .get(isNotLoggedIn, authControllers.renderLoginForm)
  .post(isCorrectEmail, isCorrectPass, catchErrors(authControllers.userLogin));

router.route('/signup')
  .get(isNotLoggedIn, authControllers.renderSignupForm)
  .post(userExists, isValidPass, catchErrors(authControllers.userSignup));

router.get('/logout', authControllers.userLogout);

module.exports = router;
