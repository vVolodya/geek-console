const router = require('express').Router();

const { renderHomePage } = require('../controllers/indexControllers');

router.get('/', renderHomePage);

module.exports = router;
