const app = require('./app');
const Logger = require('./logging/logger');
const { expressConfig } = require('./utils/env.config');

app.listen(expressConfig.PORT, expressConfig.HOSTNAME, () => {
    Logger.debug(
        `Server started on ${expressConfig.HOSTNAME || 'localhost'}:${
            expressConfig.PORT
        }`
    );
});
