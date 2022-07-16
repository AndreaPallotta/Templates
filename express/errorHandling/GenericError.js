class GenericError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    getCode() {
        if (this instanceof BadRequest) return 400;
        if (this instanceof NotFound) return 404;
        return 500;
    }
}

class BadRequest extends GenericError {}
class NotFound extends GenericError {}

module.exports = {
    GenericError,
    BadRequest,
    NotFound,
};
