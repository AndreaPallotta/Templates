const apicache = require('apicache');
const { CACHE_TIME } = require('@utils/env.config');

module.exports = apicache.middleware(CACHE_TIME);
