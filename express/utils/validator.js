const { validationResult } = require('express-validator');

module.exports = (validations) => {
    return async (req, res, next) => {
        for (const validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length) break;
        }
        const errors = validationResult(req);

        if (errors.isEmpty()) return next();

        const errorMessages = errors
            .array()
            .filter(({ msg }) => msg !== undefined)
            .map(({ msg }) => msg);

        return res
            .status(400)
            .json({ error: `Invalid Fields - ${errorMessages.join(',')}` });
    };
};
