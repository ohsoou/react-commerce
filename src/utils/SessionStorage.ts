const SessionStorage = {
     setItem(key: string, value: string) {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(key, value);
        }
    },

    getItem(key: string) {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(key);
        }
        return null;
    },

    removeItem(key: string) {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(key);
        }
    }
}

export default SessionStorage;