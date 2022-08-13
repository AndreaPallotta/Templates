const validate = require('@validation/validator');
const { param, body } = require('express-validator');

exports.validateGET = validate([param('username').not().isEmpty()]);

exports.validatePOST = validate([
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isLength({ min: 8, max: 25 }),
]);
