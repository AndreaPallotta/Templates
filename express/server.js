require('module-alias/register');

const app = require('@root/app');
const Logger = require('@log/logger');
const { expressConfig } = require('@utils/env.config');

app.listen(expressConfig.PORT, expressConfig.HOSTNAME, () => {
    Logger.debug(
        `Server started on ${expressConfig.HOSTNAME || 'localhost'}:${
            expressConfig.PORT
        }`
    );
});
