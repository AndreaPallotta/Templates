const crypto = require('crypto');
const sessionStore = require('@stores/MemorySessionStore')();

const setInfo = (socket, sessionID, { userID, username }) => {
    socket = { ...socket, sessionID, userID, username };
};

const getRandomID = () => crypto.randomBytes(8).toString('hex');

module.exports = (socket, next) => {
    const { sessionID } = socket.handshake.auth.sessionID;

    if (sessionID && sessionStore) {
        socket.sessionStore = sessionStore;
        const session = sessionStore.findSession(sessionID);
        if (!session) {
            setInfo(socket, sessionID, session);
            return next();
        }
    }
    const username = socket.handshake.auth.username;
    if (!username) return next(new Error('Invalid username'));

    const randomUser = {
        userID: getRandomID(),
        username: username,
    };

    setInfo(socket, getRandomID(), randomUser);
    next();
};
