const router = require('express').Router();
const { validateToken } = require('@auth/jwt');
const { testGet, testPost } = require('@routes/test/test.controller');
const { validateGET, validatePOST } = require('@routes/test/test.validator');

router.get('/test-get', [validateToken, validateGET], testGet);
router.post('/test-post', validatePOST, testPost);

module.exports = router;
