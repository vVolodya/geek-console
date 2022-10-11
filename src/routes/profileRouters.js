const router = require('express').Router();

const profileControllers = require('../controllers/profileControllers');

router.route('/')
  .get(profileControllers.renderProfile)
  .post(profileControllers.updateProfile);

router.get('/books', profileControllers.renderBooks);

module.exports = router;
