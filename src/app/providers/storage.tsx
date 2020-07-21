export const storage = {
    get: (key: string) => {
        const data = localStorage.getItem(key);
        if (!data) {
            return false;
        }
        try {
            return JSON.parse(data);
        } catch (e) {
            console.log(e);
            return false;
        }
    },

    set: (key: string, value: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log(e);
        }
    },

    remove: (key: string) => {
        localStorage.removeItem(key);
    }
}
