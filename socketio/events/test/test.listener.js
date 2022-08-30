exports.generic = (socket, eventName, callback) => {
    socket.on(eventName, callback);
};

exports.onTestEvent = (socket, callback) => {
    if (callback) callback;
    else {
        socket.on('testEvent', ({ content, to }) => {
            console.log(content);
            console.log(to);
        });
    }
};
