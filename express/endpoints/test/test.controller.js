const Logger = require('@log/logger');
const HTTPError = require('@errors/HTTPError');
const { newTokens } = require('@auth/jwt');

exports.testGet = async ({ params }, res) => {
    Logger.debug(`GET /test/test-get/ params ${params}`);
    return HTTPError.Err(404, 'Data not found', res);
};

exports.testPost = async (req, res) => {
    try {
        const tokens = await newTokens(req.email);
        return res.json(tokens);
    } catch (err) {
        return HTTPError.Err(500, err.message, res);
    }
};
