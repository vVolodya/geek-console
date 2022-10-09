const router = require('express').Router();

const authControllers = require('../controllers/authControllers');

router.route('/login')
  .get(authControllers.renderLoginForm)
  .post(authControllers.userLogin);

router.route('/signup')
  .get(authControllers.renderSignupForm)
  .post(authControllers.userSignup);

module.exports = router;