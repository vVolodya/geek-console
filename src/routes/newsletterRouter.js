const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const newsletterControllers = require('../controllers/newsletterControllers');

router.post('/', newsletterControllers.getEmail);

module.exports = router;