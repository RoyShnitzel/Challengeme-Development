const router = require('express').Router();
const checkAdmin = require('../../../middleware/checkAdmin');
const checkToken = require('../../../middleware/checkToken');
const checkWebhook = require('../../../middleware/checkWebhook');

router.use('/submission', checkToken, require('./githubResponse'));
router.use('/team', checkWebhook, require('./team'));
router.use('/events', checkWebhook, require('./events'));
router.use('/admin',checkToken, checkAdmin, require('./admin'));

module.exports = router;
