require('dotenv').config({ path: '.env' });

const { NODE_ENV, HOST, PORT, ORIGIN, LOG_LEVEL } = process.env;

const env = NODE_ENV || 'development';

const isDev = env === 'development';
const isTest = env === 'test';
const isProd = env === 'production';
const logLevels = ['error', 'warn', 'info', 'http', 'debug'];

const PORT_NUMBER = PORT ?? 8081;
const CORS_ORIGIN = ORIGIN ?? `http://${HOST}:${serverConfig.PORT}`;

const serverConfig = {
    PORT: PORT_NUMBER,
    HOSTNAME: HOST,
    ORIGIN: CORS_ORIGIN,
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
exports.serverConfig = serverConfig;
exports.getLogLevel = getLogLevel;
