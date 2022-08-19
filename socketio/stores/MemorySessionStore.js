const SessionStore = require('@stores/SessionStore');

class MemorySession extends SessionStore {
    constructor() {
        super();
        this.sessions = new Map();
    }

    getSession(id) {
        return this.sessions.get(id);
    }

    setSession(id, session) {
        this.sessions.set(id, session);
    }

    getAllSessions() {
        return { ...this.sessions.values() };
    }

    connect(id, session) {
        this.setSession(id, {
            ...session,
            connected: true,
        });
    }

    disconnect(id) {
        this.setSession(id, {
            ...this.getSession(id),
            connected: false,
        });
    }
}

module.exports = MemorySession;
