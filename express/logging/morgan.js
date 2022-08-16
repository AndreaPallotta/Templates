const morgan = require('morgan');
const { isDev } = require('@utils/env.config');
const Logger = require('./logger');

const stream = {
    write: (message) => Logger.http(message),
};

const skip = (_, res) => {
    return isDev ? false : res.statusCode < 400;
};

const morganMid = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { stream, skip }
);

module.exports = morganMid;
