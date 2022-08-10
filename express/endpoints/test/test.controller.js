const Logger = require('@log/logger')
const HTTPError = require('@errors/HTTPError');

exports.testGet = async (req, res) => {
    const { queryParam1, queryParam2 } = req.query;

    if (!queryParam1 && !queryParam1) {
        Logger.error('Invalid params');
        return HTTPError.Err(400, undefined, res);
    }

    if (queryParam1 === queryParam2) {
        Logger.info(`params are equal: ${queryParam1}`);
        return res.json('They are equal');
    }

    return HTTPError.Err(404, 'Data not found', res);
};

exports.testPost = async (req, res) => {
    const { bodyParam1, bodyParam2 } = req.body;

    if (Object.keys(req.body).length === 0) {
        return HTTPError.Err(400, undefined, res);
    }

    if (bodyParam1 === 'post request' && bodyParam2 === false) {
        return HTTPError.Err(500, undefined, res);
    }

    return res.json('Request completed');
};
