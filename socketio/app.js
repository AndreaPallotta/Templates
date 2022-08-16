const express = require('express');
const app = express();
const server = require('http').Server(app);
const socketio = require('socket.io');
const { serverConfig } = require('@utils/env.config');

const socket = socketio(server, {
    cors: {
        origin: [serverConfig.ORIGIN],
    },
});

app.use('/public', express.static('public'));
app.disable('x-powered-by');
app.options('*', (_, res) => {
    res.send(200);
});

/**
 * Add HTTP endpoints here directly:
 * 1. app.<method>...
 * or import a set of endpoints
 * 2. app.use('root-endpoint', <routes>)
 */

exports.socket = socket;
exports.server = server;
