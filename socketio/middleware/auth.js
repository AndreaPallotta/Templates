module.exports = (socket, next) => {
    const username = socket.handshake.username;
    if (!username) {
        return next(new Error('Invalid username'));
    }

    socket.username = username;
    next();
};
