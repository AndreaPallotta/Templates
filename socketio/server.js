require('module-alias/register');

const { server } = require('@root/app');
const { serverConfig } = require('@utils/env.config');
const Logger = require('@log/logger');

const { PORT, HOSTNAME } = serverConfig;

server.listen(PORT, HOSTNAME, () => {
    Logger.debug(`Server started on ${HOSTNAME ?? 'localhost'}:${PORT}`);
});
