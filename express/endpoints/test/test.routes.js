const router = require('express').Router();
const { validateToken } = require('@auth/jtw');
const { testGet, testPost } = require('./test.controller');

router.get('/test-get', validateToken, testGet);
router.post('/test-post', testPost);

module.exports = router;
