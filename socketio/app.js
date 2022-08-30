const express = require('express');
const app = express();
const server = require('http').Server(app);
const socketio = require('socket.io');
const { serverConfig } = require('@utils/env.config');
const authMid = require('@mid/auth');
const sessionMid = require('@mid/session');
const Logger = require('@log/logger');

const { broadcastEmpty } = require('@events/test.emitter');
const { onTestEvent } = require('@events/test.listener');

const io = socketio(server, {
    cors: {
        origin: [serverConfig.ORIGIN],
    },
});

io.use(authMid);
io.use(sessionMid);

io.on('connection', (socket) => {
    const { sessionID, userID, username, sessionStore } = socket;

    sessionStore.connect(sessionID, { userID, username });

    socket.emit('session', {
        sessionID,
        userID,
    });

    socket.on('disconnect', async () => {
        if (await io.in(userID).allSockets().size) {
            Logger.error(`Error disconnecting ${username}`);
            return;
        }
        socket.broadcast.emit(`user ${username} disconnected`);
        sessionStore.disconnect(sessionID);
        Logger.debug('disconnected', socket.id);
    });

    onTestEvent(socket);
    broadcastEmpty(socket);
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
