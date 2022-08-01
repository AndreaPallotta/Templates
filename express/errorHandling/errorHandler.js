const { GenericError } = require('./GenericError');
const Logger = require('@log/logger');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    Logger.error(`Error caught in ${req.path}: ${err}`);
    if (err instanceof GenericError) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message,
        });
    }
    return res.status(500).json({
        status: 'error',
        message: err.message,
    });
};

module.exports = errorHandler;
