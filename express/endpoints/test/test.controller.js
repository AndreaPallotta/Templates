const Logger = require('@log/logger');
const { newTokens } = require('@auth/jwt');

exports.testGet = async ({ params }, res) => {
    Logger.debug(`GET /test/test-get/ params ${params}`);
    return res.status(404).send({ error: 'Data not found' });
};

exports.testPost = async (req, res) => {
    try {
        const tokens = await newTokens(req.email);
        return res.json(tokens);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};
