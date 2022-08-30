exports.emitEmpty = (socket) => {
    socket.emit('emitEmpty', []);
};

exports.broadcastEmpty = (socket) => {
    socket.broadcast.emit('broadcastEmpty', {});
};

exports.privateEmpty = (socket, recipient) => {
    socket.to(recipient).emit('privateEmpty', {
        from: socket.id,
    });
};
