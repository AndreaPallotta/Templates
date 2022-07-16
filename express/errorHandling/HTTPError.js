const genericMessages = {
    400: 'The request cannot be fulfilled due to bad syntax',
    401: 'Authentication has failed or not yet been provided',
    403: 'The server is refusing to respond to the request',
    404: 'The requested data could not be found',
    408: 'The server timed out waiting for the request',
    500: 'Internal Server Error',
    503: 'The server is currently unavailable',
};

const createError = (errorMsg = 'Unknown Error Found', code = 500) => {
    return { Code: code, Error: errorMsg };
};

class HTTPError {
    static Err(code = 500, errorMsg, res) {
        if (!errorMsg) errorMsg = genericMessages[`${code}`];
        const { Code, Error } = createError(errorMsg, code);
        if (res) return res.status(Code).json(Error);
        return { Code, Error };
    }
}

exports.createHTTPError = createError;
exports.genericMessages = genericMessages;
module.exports = HTTPError;
