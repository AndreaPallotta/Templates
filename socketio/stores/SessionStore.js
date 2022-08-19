/* eslint-disable no-unused-vars */
/* abstract */ class SessionStore {
    getSession(_id) {}
    setSession(_id, _session) {}
    getAllSessions() {}
    connect(_id, _session) {}
    disconnect(_id) {}
}

module.exports = SessionStore;
