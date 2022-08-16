exports.generic = (socket, eventName, callback) => {
    socket.on(eventName, callback);
};

exports.onTestEvent = (socket) => {
    socket.on('testEvent', ({ content, to }) => {
        console.log(content);
        console.log(to);
    });
};
