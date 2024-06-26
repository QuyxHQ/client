import React, { createContext, useEffect, useReducer, useState } from 'react';
import { io } from 'socket.io-client';
import useApi from '../hooks/useApi';
import env from '../../utils/env';

const initialState = { user: undefined };

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>({
    isMounting: true,
    isAuthenticated: false,
    isAuthenticating: false,
    events: [],
    setIsAuthenticating() {},
    login() {},
    async logout() {},
    async getUser(_?: { access_token: string; refresh_token: string }) {},
});

function reducer(state: any, action: { type: string; payload?: any }) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };

        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isMounting, setIsMounting] = useState<boolean>(true);
    const [isAuthenticated, setIsAutenticated] = useState<boolean>(false);
    const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
    const [events, setEvents] = useState<Events[]>([]);

    useEffect(() => {
        const socket = io(env.API_ENDPOINT, { reconnectionDelayMax: 10000 });

        socket.on('connect', () => console.info('Connected to ws'));
        socket.on('disconnect', () => console.info('Disconnected from ws'));

        socket.on('message', (data) => setEvents((prev) => [...prev, data]));

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(function () {
        getUser();
    }, []);

    async function getUser(params?: { access_token: string; refresh_token: string }) {
        const { user } = await useApi(params);
        setIsAuthenticating(true);

        const whoami = await user.whoami();
        if (whoami) {
            dispatch({ type: 'LOGIN', payload: whoami });
            setIsAutenticated(true);
        } else {
            setIsAutenticated(false);
        }

        setIsMounting(false);
        setIsAuthenticating(false);
        return;
    }

    function login(user: User) {
        dispatch({ type: 'LOGIN', payload: user });
    }

    async function logout() {
        dispatch({ type: 'LOGOUT' });
        setIsAutenticated(false);

        await Promise.all([
            env.storage.removeItem('access_token'),
            env.storage.removeItem('refresh_token'),
        ]);
    }

    return (
        <AppContext.Provider
            value={{
                user: state.user,
                isMounting,
                isAuthenticated,
                isAuthenticating,
                events,
                setIsAuthenticating,
                login,
                logout,
                getUser,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
