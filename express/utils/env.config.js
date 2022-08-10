require('dotenv').config({ path: '.env' });

const { NODE_ENV, PORT, HOST, LOG_LEVEL, SECRET, CACHE_TIME, SECURE_TESTS } =
    process.env;
const env = NODE_ENV || 'development';

const isDev = env === 'development';
const isTest = env === 'test';
const isProd = env === 'production';

const logLevels = ['error', 'warn', 'info', 'http', 'debug'];

const expressConfig = {
    PORT: PORT || 8081,
    HOSTNAME: HOST,
};

const getLogLevel = () => {
    if (!LOG_LEVEL || !logLevels.includes(LOG_LEVEL)) {
        return isDev ? 'debug' : 'warn';
    }
    return LOG_LEVEL;
};

exports.isDev = isDev;
exports.isTest = isTest;
exports.isProd = isProd;
exports.expressConfig = expressConfig;
exports.JWT_SECRET = SECRET;
exports.getLogLevel = getLogLevel;
exports.CACHE_TIME = CACHE_TIME || '2 minutes';
exports.SECURE_TESTS = SECURE_TESTS === 'true';
