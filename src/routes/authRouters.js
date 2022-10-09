const router = require('express').Router();

const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.renderLoginForm);

module.exports = router;