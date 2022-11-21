const Router = require('express');
const router = new Router();

const controller = require('../controllers/usersController');

router.get('/', controller.generateUsers);

module.exports = router;