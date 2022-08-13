const Logger = require('@log/logger');
const HTTPError = require('@errors/HTTPError');

exports.testGet = async ({ params }, res) => {
    Logger.debug(`GET /test/test-get/ params ${params}`);
    return HTTPError.Err(404, 'Data not found', res);
};

exports.testPost = async (req, res) => {
    return res.json('Request completed');
};
