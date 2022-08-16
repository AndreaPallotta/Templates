require('module-alias/register');

const app = require('@root/app');
const Logger = require('@log/logger');
const { expressConfig } = require('@utils/env.config');

const { PORT, HOSTNAME } = expressConfig;

app.listen(PORT, HOSTNAME, () => {
    Logger.debug(`Server started on ${HOSTNAME ?? 'localhost'}:${PORT}`);
});
