const express = require('express');
const app = express();
const server = require('http').Server(app);
const socketio = require('socket.io');
const { serverConfig } = require('@utils/env.config');
const authMid = require('@mid/auth');
const Logger = require('@log/logger');

const io = socketio(server, {
    cors: {
        origin: [serverConfig.ORIGIN],
    },
});

io.use(authMid);
io.on('connection', (socket) => {
    socket.emit('test', []);

    socket.on('disconnect', () => {
        Logger.debug('disconnected', socket.id);
    });
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

exports.io = io;
exports.server = server;
