const router = require('express').Router();

const { catchErrors } = require('../middlewares/errorHandlers');

const newsletterControllers = require('../controllers/newsletterControllers');

router.post('/', catchErrors(newsletterControllers.getEmail));

module.exports = router;
