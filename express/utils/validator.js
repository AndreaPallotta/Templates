const { validationResult } = require('express-validator');
const HTTPError = require('@errors/HTTPError');

module.exports = (validations) => {
    return async (req, res, next) => {
        for (const validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length) break;
        }
        const errors = validationResult(req);

        if (errors.isEmpty()) return next();

        return HTTPError.Err(404, `Invalid Fields - ${errors.array()}`, res);
    };
};
