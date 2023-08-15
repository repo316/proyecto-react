import { create } from 'zustand'

const userSessionStore = create((set,get) => ({
    data: {},
    error: null,
    isLoggedIn: false,
    setSession: (params) => {
        try {
            localStorage.setItem('userSession.jsx', JSON.stringify(params));
            set(() => ({ data }));
            set(() => ({ isLoggedIn : true }));
        } catch (error) {
            set(() => ({ error }));
        }
    },
    getSession: () => {
        if(!localStorage.getItem('userSession.jsx')){
            set(() => ({ error: 'You are offline!' }));
            return;
        }
        set(() => ({ isLoggedIn : true }));
        const session = localStorage.getItem('userSession.jsx');
        const dataJson = JSON.parse(session);
        set(() => ({ data:dataJson }));
        return dataJson;
    },
    getIsLoggedIn: () => get().isLoggedIn
}));

export default userSessionStore;
