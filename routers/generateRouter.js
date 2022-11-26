const Router = require('express');
const router = new Router();
const generateController = require('../controllers/generateController');

router.get('/generate', generateController.getRandomUsers);
router.get('/download', generateController.getCsv);

module.exports = router;